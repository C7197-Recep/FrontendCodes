// console.time("alert_ornek");
// alert("merhaba");
// console.timeLog("alert_ornek");
// console.log("devam eden işler...");
// console.timeEnd("alert_ornek");

const startTime = Date.now();
const myLog= (input) => {console.log(`Elapsed: ${Date.now()-startTime}ms\t\t${input}`)};

const slowTask = () => {
    let i=0;
    do{
        i++;
    }while (i<10000000);
}

// const btn=document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     const result = slowTask();
//     console.log(result);

//     let pElem=document.createElement("p");
//     pElem.innerHTML=`This is newly-added paragraph<br>${result}`;
//     document.body.appendChild(pElem);
// });

/*BU ORNEKTE settimeout ASENKRON. ONCE ASAGIDAKI KODU CALISTIRIP
BEKLEMEDEN SETTIMEOUT U CALISTIRIR.
YANI SETTIMEOUT ANA ISLER BITINCE CALISIR*/
/*3*/setTimeout(()=>{
    console.log("time ended");
}, 0);
/*1*/console.log("time started");
/*2*/console.log(slowTask());


const btn=document.querySelector("button");
btn.addEventListener("click", ()=>{

    setTimeout(() => {
        const result = slowTask();
        console.log(result);
    }, 0);

    setTimeout(slowTask(),0);

    let pElem=document.createElement("p");
    pElem.innerHTML=`This is newly-added paragraph<br>${result}`;
    document.body.appendChild(pElem);
});
/*3 async yöntem var*/

function t1(){
    console.log("t1 done");
}

function t2(){
    console.log("t2 done");
}

function t3(){
    console.log("t3 done");
}

/*1-2-3 sırasıyla yapar*/
setTimeout(()=>{
    t1();
    setTimeout(()=>{
        t2();
        setTimeout(()=>{
            t3(); 
            console.log("all finished");
        },0);
    },0)
},0);

/*BU DA TERS SIRADA YAPTIRIR*/
setTimeout(()=>{
    myLog(t1());
},2000);
setTimeout(()=>{
    myLog(t2());
},1500);
setTimeout(()=>{
    myLog(t3());
},1000);

/*1500 ms içinde kahvaltı hazırlanır
2000 ms bittiğinde çay demlenir.
yani kahvaltı hazırlanırken çay aynı anda demleniyor.
sonraki 1000  ms kahvltı yaıır ve çay içilir*/
setTimeout(()=>{
    myLog(brewTea());
    setTimeout(()=>{
        myLog(makeBreakfast());
        myLog(drinkTea());
        myLog("all finished");
    },1000)
},2000);
setTimeout(()=>{
    myLog(prepareBreakfast());
},1500);


/*callback örneği*/
navigator.geolocation.getCurrentPosition(successHandler,errorHandler);

function successHandler(response){
    console.log(response);
}

function errorHandler(error){
    console.log(error);
}

/* 
promise
1.resolve
2.reject

.then()
.catch()

3 durumu: fullfill, fail, panding
*/

/*AŞAĞIDAKİLER 1-4-3-2 SIRASIYLA ÇALIŞIR*/
myLog('1. Synchronous');

setTimeout(()=>myLog('2.Timeout'),0);

Promise.resolve().then(()=>myLog('3.Promise'));

myLog('4.Synchronous');

const myPromise = new Promise((resolve, reject)=>{
    myLog('Promise started');
    let condition=!Math.floor(Math.random()*2);
    if (condition){
        let result = 42;
        /*bunu than ile yakalarız*/
        resolve(result);
    }else{
        /*bunu çağırırsak catchle yakalamalıyız*/
        reject(new Error('promise failed'));
    }
});

myPromise
.then((msg)=>{
    myLog(msg);
})
.catch((err)=>{
    myLog(err);
});

function suyuKaynat(){
    slowTask();
    return true;
}

function demEkle(){
    slowTask();
    return true;
}

/* PROMISE CHAINING*/
const cayDemle = () => {
    /*hemen execute etmek için*/
    //Promise.resolve().than();

    new Promise((resolve, reject)=>{
        if (suyuKaynat()){
            resolve('Su hazır');
        }else{
            reject('Su kaynamadı');
        }
    })
    .then(()=>{
        return new Promise((resolve, reject)=>{
            if (demEkle()){
                slowTask();
                resolve('çay hazır');
            }else{
                throw Error('çay yok');
            }
        });
    })
    .then((msg)=>myLog(msg))
    .catch((err)=>myLog(err));
}  

/*DOSYA BİLGİSİ ÇEKERKEN 3 YÖNTEM
1.AXIOS (AJAX)
2.FETCH (BROWSER)
3.XMLHTTPREQ (ESKİ) */

const url="https://jsonplaceholder.typicode.com/users/8";

fetch(url)
.than((payload) => {
    if(payload.status=="200"){
        payload.json();
    }else{
        throw Error (payload.status);
    }
})
.than((user) => console.log(user.name))
.catch((err)=>{console.log(err)});

/*const cayDemle =  new Promise((resolve, reject)=>{
    if (suyuKaynat()){
        resolve('Su hazır');
    }else{
        reject('Su kaynamadı');
    }
    
})
.then()
.then()
.then();
*/

/*const cayDemle=new Promise().resolve().then(()=>{});*/
/*const cayDemle=new Promise();
cayDemle =(resolve, reject)=>{
}*/