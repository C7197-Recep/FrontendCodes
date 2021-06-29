/*JS ÖNEMLİ YÖNTEMLER
undefined-null hatalarından kurtarmak için

Nullish coalescing operator:
? obje undefined ise hata vermesini engeller
?? 0 eğer obje null gelirse hata vermesini engeller
burada değer null olunca getLimit değeri ne olsun istiyorsak
0 yerine onu yazmalıyız.

ÖRNEK:
const getLimit = (user) => userLimits?.[user] ?? 0;

*/

/*FUNCTIONAL PROGRAMLAMADA
PRENSIPLER: PURE FUNCTION-IMMUTABILITY
PAYLASIMLI DEGISKENLERDE FONKSIYONLAR YAPISAL DEGISIKLIK YAPMAMALI
SIDE EFFECT OLUSTURMAMALI

SHARED VARIABLES IMMUTABLE OLMASI GEREK
BUNA UYGUN OLARAK DUZELTELIM*/

const balance = [
    { value: 1250, description: 'Sold Litecoin', user: 'barry' },
    { value: -1000, description: 'Rent', user: 'barry' },
    { value: 5300, description: 'Monthly salary', user: 'barry' },
    { value: 800, description: 'Sold Bitcoin', user: 'barry' },
    { value: -1900, description: 'New Smartphone', user: 'barry' },
    { value: -20, description: 'Buy chocolate', user: 'tina' },
    { value: -125, description: 'Buy guitar', user: 'tina' },
    { value: -2200, description: 'New Laptop', user: 'barry' },
];

const userLimits = Object.freeze({
    barry: 1500,
    tina: 100,
});

// const getLimit = (user) => userLimits?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;


function addExpense(state, limits, value, description, user = 'barry') {
    // user = user.toLowerCase();
    const fixedUser = user.toLowerCase();

    // if (value <= getLimit(limits, user)) {
    //     balance.push({ value: -value, description, user:fixedUser });
    // }
    /*SHALOW COPY:
    ...state YENI BIR ARRAYA STATE ICINDE NE VARSA KOYAR
    , SONRASINA YENİ BİR ITEM YAZILARAK ARRAYA EKLENİR
    */
    return value <= getLimit(limits, user)?
        [...state, {value: -value, description, user: fixedUser} ]
    :   state;
    
}
// addExpense(10, 'Kebab');
// addExpense(100, 'Going to movies', 'tina');
const newBalance1= addExpense(balance, userLimits, 10, "Kebab");
console.log (newBalance1);
const newBalance2 = addExpense(
    newBalance1,
    userLimits,
    100,
    "Going to movies",
    "tina"
);

addExpense(balance, userLimits, 100, "Guitar", "Alex");
console.log(newBalance2);

console.log(balance);

function checkExpenses(state, limits) {

    return state.map((item)=>{
        item.value < -getLimit(limits, item.user)
        ? {...item, flag:"limit"}
        : {...item}
    });
    // for (const item of balance) {
    //     if (item.value < -getLimit(limits, item.user)) {
    //         item.flag = 'limit';
    //     }
    // }
}
const finalBudget=checkExpenses(newBalance2, userLimits);
finalBudget[0].test ="testing";
console.log(finalBudget);


function logBigExpenses(bigLimit) {
    // let output = '';
    // for (const item of balance)
    //     output += item.value <= -bigLimit ? `${item.description} / ` : '';

    // output = output.slice(0, -2);
    // console.log(output);

    //return state
        // .filter( item => item.value <= -bigLimit)
        // .map((item)=>item.description)
        // .join("/");
        /*YUKARIDAKİ 3 METODLA YAPTIĞIMIZ İŞİ reduce İLE DE YAPABİLİRİZ*/
    
    /*reduce her adımda accumulatorü return eder ve bunu unutmaz*/
    return state.reduce((acc,item) => 
        item.value <= -bigLimit ? acc + `${item.description} / ` : acc
    ).slice(0, -2);

    }
// console.log(balance);
// logBigExpenses(500);

console.log(logBigExpenses(finalBudget, 500));



/*call bind apply METODLARI*/
/*this normal fonksiyonlarda windowu işaret eder
array fonksiyonlarda parenti işaret eder*/
const thy = {
    airline = "Turkish Airlines",
    iataCode: "TK",
    bookings: [],

    book (flightNum, name) {
        console.log(this);
        console.log(
            `${name} booked a seat on ${this.airline} 
             flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
}

thy.book(239, "Barry Mitchell");

const anadolu = {
    airline = "Anadolu Jet",
    iataCode: "TK",
    bookings: [],
}

const pegasus = {
    airline = "Pegasus Airlines",
    iataCode: "TK",
    bookings: [],
}

/*bu şekilde kullanırsak fonksiyon içindeki this
parent yerine window olduğu için fonksiyon çalışmıyor.
bu hatayı engellemek için call metoduyla çağırıyoruz*/
const book = thy.book;
book (11, "Matthew");
book.call(anadolu, 11, "Matthew");
book.call(thy, 22, "Mark");
book.call(pegasus, 55, "Felix");

/*eskiden apply kullanılıyordu call yerine.
tek farkı parametreleri array içinde gönderiyoruz*/
book.apply(pegasus, [66, "Eser"]);

/*bind fonksiyonu direkt çalıştırmaz.
yeni fonksiyon tanımlayıp, senin this in şu olacak diyoruz.*/
const bookTHY = book.bind(thy);

bookTHY(77, "Betül");

thy.planes = 300;
thy.addPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

/*aşağıdaki gibi doma event bağlarken bağlanan fonksiyonun hemen çalışmaması lazım.
onun için call değil, bind ile this i değiştirebiliriz*/
document
    .getElementById("plane")
    .addEventListener("click", thy.addPlane.bind(thy));

thy.addPlane();


