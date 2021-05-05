
'use strict';

const person={
    firstName:'Barry',
    lastName:'Mitchell',
    birthYear:1977,
    skills:["JS", "AWS", "Dockers", "Pyhton"],
    employed:true,
    2021: "Clarusway TS",
    true: "is it working",
    calcAgeBad: function(bYear){
        //burada this use stricten etkilenmez
        console.log(this);
        return 2021-bYear;
    },
    //Fonksiyon böyle de tanımlanabiliyor
    calcAgeBad2 (bYear){
        return 2021-bYear;
    },
    calcAge: function(){
        return 2021 - this.birthYear;
    },
    //bu fonksiyonda this parentı verir, yani window objecti
    calcAge2: ()=>{
        console.log(this);
        return 2021 - this.birthYear;
    }
}

const teacher={};

teacher.fullName="Barry Mitchell";
console.log(person.firstName);
console.log(person.birthYear);
console.log(teacher.fullName);
console.log(person[2021]);
console.log(person["2021"]);
console.log(person.true);

const year=2021;
console.log(person[year]);
console.log(person.year);

const keyTag="Name";
console.log(person["first" + keyTag]);

//change or modify
console.log(person.birthYear);
person.birthYear=1978;

//add property
console.log(person.midName);
person.midName="Alexis";
console.log(person.midName);

//Attention to typos
person.lasName="Brown";
console.log(person);

//delete
delete person.lastName;
console.log(person.lastName);//undefined

//looping on objects
//for (let item of Object.values(person)){
for (let item of Object.keys(person)){
    console.log(item);
} 

console.log(person.calcAgeBad(1977));
console.log(person.calcAge());

const calcAge= function (birthYear){
    console.log("regular function in global scope");
    //use strict açılırsa this kullanılamıyor
    console.log(this);
    return 2021-birthYear;
}

calcAge(1977);

//arrow functionda use strict olduğunda this için undefined
//vermez. parenta bakarak this isimlendirir.
const calcAge2= (birthYear)=>{
    console.log("regular function in global scope");
    //use strict açılırsa this kullanılamıyor
    console.log(this);
    return 2021-birthYear;
}

calcAge2(1977);

const baby={
    nickname="Tina",
    birthYear=2019,
}

baby.calcAge=person.calcAge;
console.log(baby.calcAge());


const newPerson=person;
newPerson.firstName="Alexis";
console.log(newPerson.firstName);
console.log(person.firstName);

const hotel = {
    name: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
};

//destructuring objects
const arr=[1,2,3,4,5,6];
let [x, ,y, ...others]=arr;
console.log(x, y, others);

//eğer local değişkeni arrayde yoksa default değeri alır
const {name, options, rooms, local="Paris"}=hotel;
//local isimli key olmadığından local undefined verir
console.log(name, options, room, local);

//arr içindeki değişkenlere farklı isimle çağırma
const {name=hotelName, rooms=hotelRooms, local2="not availabe"}=hotel;
console.log(hotelName, hotelRooms, local2);

const{mon}=hotel.receptionHours;
console.log(mon);

//alt elemanı çağırma
const {fri:{open, close}}=hotel.reseptionHours;
console.log(open,close);

//short circuting
//eğer array numGuests değişkenine sahip değilse 50 değerini ata
const guests=hotel.numGuests || 50;
console.log(hotel.numGuests);

//nullish cualescing operator
//bu durumda 0 false anlamına geldiği için 
//müşteri sayısı 0 yerine yanlış şekilde 40 oluyor
//bunun çözümü var
hotel.numGuests=0;
const guests2=hotel.numGuests || 40;
console.log(guests2);
//null veya undefined ise 40 döndür
const guests2=hotel.numGuests ?? 40;
console.log(guests3);

//chaining
console.log(hotel.receptionHours.mon.open);
//? sayesinde eleman yoksa hata vermez, null verir
console.log(hotel.receptionHours.tue?.open);

const arr=[2,4,6,8];
//proto üretilen object içinde görülmeyen fonksiyonları tutar
//örneğin yukarıdaki array içinde push metodu proto içinde yer alır
//arrayde default olan push metodunu değiştrelim
Array.prototype.push=function(){
    console.log("this is new push method");
}
//şu an aşağıdaki kod 5 i arraya push etmek yerine yukarıdaki mesajı yazar
arr.push(5);



function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    //BU SEKILDE TANIMLANAN FONKSIYONLAR PROTOTYPE A YAZILMAZ
    //PROTOTYPE A YAZMAK ICIN makeColor.prototype... SEKLINDE DISARDA YAZILMALI
    color.rgb = function () {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
      const { r, g, b } = this;
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
  }

const firstColor=makeColor(255,255,255);
console.log(firstColor);
console.log(firstColor.hex());
console.log(firstColor.rgb());

const div1=document.getElementById("mydiv1");
const div2=document.getElementById("mydiv2");
div1.style.backgroundColor=firstColor.rgb();

//constructing functions
function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
}
//Bu kod undefined döndürür. Çünkü constructor ile objeyi tanımlamadık
console.log(Color(55,55,55));
//Burada define ediyoruz
const color1= new Color(55,55,55);
console.log(color1);

//Color objesi içine yeni fonksiyonlar ekle
//Bu fonksiyon prototype a yerleştiriliyor
Color.prototype.rgb=function(){
    const {r,g,b}=this;
    return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.hex=function(){
color.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
}
const color1= new Color(55,55,55);
console.log(color1);
const color2= new Color(155,155,155);
console.log(color2);

const div1=document.getElementById("mydiv1");
const div2=document.getElementById("mydiv2");
//prototype a yazılan fonksiyonlar çağırılıyor
div1.style.backgroundColor=color1.rgb();
div2.style.backgroundColor=color1.hex();

//BU FONKSIYONLAR PROTOTYPE DA VE ICERIK AYNIYSA, AŞAĞIDAKİ KONTROL TRUE DÖNDÜRÜR.
//AMA ICERDE TANIMLILARSA, FALSE DÖNDÜRÜR
color1.rgb==color2.rgb;

//CLASSES
/*abstraction, encapsulation, inheritance, polymorphism*/

class ColorClass{
  constructor(r,g,b,name)
  {
    this.r=r;
    this.g=g;
    this.name=name;
  }
  //BU FONKSIYONLAR OTOMATIK OLARAK PROTOTYPE ALTINA GIDER
  //CLASS IN FONKSIYONLARDAN BIR FARKI BU
  rgb(){
    const {r,g,b}=this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
  }
  rgba(a=1.0){
    const {r,g,b}=this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  hex(){
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);  
  }

  //STATIC METODLARI INSTANCELARA TAŞIMAZ
  static test(){
    console.log("Bu statik bir metod");
  }
}
const red=new ColorClass(255,67,89,'kırmızı');
const white=new ColorClass(255,255,255,'beyaz');
div1.style.backgroundColor=red.rgba(0.8);
div2.style.backgroundColor=white.hex;
red.test;
arr=Array.from['123456'];

const person={
    name="Barry",
    age=48
}

for (let item of Object.keys(person)) console.log(item);

class  Pet {
  #age;
  //BURADAKI PARAMETRELER CLASS CAGIRILIRKEN ALINANLAR
  constructor(name,age){
    this.name=name;
    this.#age=age;
  }
  info(){
    return('This pet's name is ${this.name} and it is ${this.age} years old.');
  }

  //PRIVATE DEGIŞKENİ GET METODUYLA DIŞARIDAN ÇAĞIRILMASINI SAĞLAYABİLİRİZ
  get petAge(){
    return this.#age;
  }

  set petAge(newAge){
    this.#age=newAge;
  }
}
//Inheritance
//Pet sınıfından extend yaptığımız için contructora gerek yok
class Dog extends Pet{
  cat(){
    return '${this.name} eats meat.';
  }
}

const karabas=new Dog("Karabaş", 5);
console.log(karabas.eat());
//üst sınıfın metodunu da çağırabiliyoruz
console.log(karabas.info());
//AGE CLASS İÇİNDE PRIVATE OLARAK TANIMLANDIĞI İÇİN DIŞARIDAN ERİŞEMEYİZ
console.log(karabas.#age);

//GETTER VE SETTER LAR METOD GİBİ DEĞİL, PROPERTY GİBİ KULLANILIR
karabas.petAge=4;
console.log(karabas.getAge);
class Cat extends Pet{
  //Pet ten extend ettiğimiz consturtoru değiştirelim
  constructor(name, age, eyes="black"){
    //Bir üstteki parentin constructor parametrelerini aynen kabul et
    super(name,age);
    //Üzerine Cat'e özgü parametreyi ekle
    //YAZILIMCI DEGISTIRILMESINI ISTEMEDIGI PROPORTYLERİ _ ILE TANIMLIYOR
    //YAZILIMCE EKIPLER ARASINDA ILETIŞIM ŞEKLİ
    this._eyes=eyes;
  }
  eat(){
    return '${this.name} eats fish.';
  }
  //Polimorfizm
  //Parenttaki info fonksiyonunu kullanmasını istemezsek yeniden yazabiliyoruz
  info(){
    return('This pet's name is ${this.name} and it is ${this.age} years old and it has  ${this.eyes} eyes');
  }

  //PRIVATE METOD. BU METODU SADECE CLASS ICINDEN ÇAĞIRABİLİRİZ
  #test(){

  }
}

const tekir=new Cat("tekir", 3, "blue");
console.log(tekir.eat());
console.log(tekir.info());


/***********************************CALLBACK FUNCTIONS**********************************************/

function foo1(array, callback) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    callback(array[i]);
  }
  return sum;
}

//FONKSIYON ICINDE FONKSIYON ÇALIŞTIRMAK İÇİN ŞU ÖRNEKLERİ KULLANABİLİRİZ
foo1([2,4,6,8], alert);
foo1([2,4,6,8], (x)=>console.log(x));

//FOR FOREACH
const payments=[100,300,-200,500,-400,225,1000,-700];

for([i,item] of payments.entries()){
  item>0
  ? console.log(i, 'You received ${item} USD')
  : console.log(i, 'You paid ${Math.abs(item)} USD')
}

//BURADA array (arr) OPSİYONEL
payments.forEach(function(item, i ,arr)
{
  item>0
  ? console.log(i, 'You received ${item} USD')
  : console.log(i, 'You paid ${Math.abs(item)} USD')

}
)

//ARRAY PROTOTYPELARI-MAP FILTER REDUCE
const array1=[1,4,9,16];
const map1=array1.map((x)=>x*2);
console.log(map1);

const str="The Quick Brown Fox";
const UPPER="ABCDEFGHIJKLMNOPRSTUVWXYZ";
//MAP FONKSIYONU ARRAYIN HERBIR ELEMANI ICIN FONKSIYON ÇALIŞTIRIR
//MAP FONKSIYONU MUTLAKA RETURN EDILMELI. ARROW FONKSIYONU KENDISI RETURN ETTIĞI ICIN RETURN KOYMADIK
console.log(
  str1
  .split('')
  .map((letter)=>
  UPPER.indexOf(letter)!== -1 ? letter.toLowerCase() : letter.toUpperCase()
  )
  .join('');
);

const people= [
  { firstName:'Barry',lastName:'Mitchell'},
  { firstName:'Tina',lastName:'Smith'},
]

//FİLTER
const words=[
  'spray',
  'limit,',
  'goalofamatch'
]

//true-false vs döndürür
const result=words.map((word)=>word.length>6);
console.log(result);

//filter gibi çalıştırıyoruz
const result=words.map((word)=>word.length>6 ? word : 'shorter');
console.log(result);

//şartı sağlayan elemanları döndürür
const result=words.filter((word)=>word.length>6);
console.log(result);

//REDUCE
const arr1=[1,2,3,4];
const reducer=(accumulator, currentValue)=>accumulator + currentValue;
//array içindeki sayıları toplar sonuç=10
arr1.reduce(reducer);
//üzerine 5 ekler
arr1.reduce(reducer,5);
let myArray=['a','b','a','b','c','e','e','d','d','d','d'];
//ARRAY İÇİNDEKİ FARKLI ELEMANLARI DÖNDÜRÜR
//a,b,c,e,d
let unique=myArray.reduce(function(acc,item){
  if (acc.indexOf(item===-1)){
    acc.push(item);
  }
  return acc;
},
[]);


/*CLOSURES*/


function add(){
  let counter=0;
  //BU FONKSIYON CLOSURE
  //BU YAPI SAYESINDE counter DEGISKENINE DISARIDAN ULASILAMAZ
  //counter DEGERINI UNUTMUYORMUS
  return function(){
    counter+=1;
    return counter;
  }
}
const addFunc=add();
console.log(addFunc());

function fontSize(size){
  return function(){
    document.querySelector("p").style.fontSize=size+"pt";
  }
}

document.getElementById("btn12").addEventListener("click", fontSize(12));
document.getElementById("btn14").addEventListener("click", fontSize(12));
document.getElementById("btn16").addEventListener("click", fontSize(12));

