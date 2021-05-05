let map = new Map();

map.set("1", "string value");
map.set(1, "number 1");
map.set(true, "boolean");

console.log(map.get("1"));
console.log(map.get(1));

//BU SEKILDE KULLANMAK YANLIS, MAP OLMAKTAN CIKARIP OBJECTE CEVIRIR
//GET VE SET LE KULLNMALI
let wrongMap=new Map();
wrongMap["bla"]="blaa";
wrongMap["bla2"]="blaa2";
console.log(wrongMap);
console.log(wrongMap.has("bla"));
console.log(wrongMap["bla"]);


console.log(map.size);
console.log(wrongMap.size);


for(key of map.keys()){
  console.log(typeof key);
}

for(key of wrongMap.keys()){
  console.log(typeof key);
}

for (key of Object.keys(wrongMp)) console.log(key, typeof key);

map.set("add", function(x,y){ return x+y});

const addition=map.get("add");
console.log(addition(3,5));

for (let key of map.keys()) console.log(key);
for (let key of map.values()) console.log(key);
for (let item of map) console.log(item);


//DESTRUCTRING
map.forEach((value,key) => 
  console.log(key,value)
);

//SETLER. TEKRARI OLMAYAN DIZILER. ARRAYI SETE CEVIRIP DUBLICATELERDEN KURATARABILIRIZ
const mySet=new Set();
mySet.add(1);
mySet.add(2);
mySet.add("string");

const obj={a:1,b:2};
mySet.add(obj);
//DEGERLER AYNI OLMASINA RAGMEN OBJ LER HAFIZADA FARKLI YERDE OLUŞUR
//O YUZDEN SET BUNU DA EKLER
mySet.add({a:1,b:2});

console.log(mySet.has(1));
console.log(mySet.size);

for(let value of mySet) console.log(value);
//HEM i HEM value AYNI ŞEYİ DÖNDÜRÜR
mySet.forEach((value, i)=> console.log(value,i));

//ARRAY ICINDE ANAGRAM OLAN KELIMELERI BUL
const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
function cleanrr(arr){
  let map=new Map();
  for (let value of arr){
    let key=value.toLowerCase().split('').sort().join('');
    console.log(key);
    //aynı keye anagram olanı koyduğu için, son anagram kelimeler kalacak
    map.set(key,value);
  }
  return map.values();
}
console.log(cleanrr(arr));

//ARRAYFROM
console.log(Array.from("barry"));
const set=new Set(["foo", "bar"]);
console.log(Array.from(set));

const map=new Map([1,2], [3,4], [5,6]);

console.log(Array.from(map));
console.log(Array.from(map.values));

const savings=Array.from(document.querySelectorAll(".savings"));
console.log(savings);

const savings2=Array.from(
  document.querySelectorAll("savings"),
  (el)=>
  Number(el.textContent.replace("$",""));
);

console.log(savings);

console.log(Array.from([1,2,3],(x)=>x*x));


console.log(Array.from(new Array(5)));
//UZUNLUĞU 5 OLAN ARRAY OLUŞTURUP İŞLEM YAPIYOR
console.log(Array.from({length:5}, (_,i)=>i));

//PYTHONDAKI range fonksiyonuna benzer fonksiyon oluşturalım
//Array.from un 2. parametresi fonksiyondur. ilk parametre olan arrayşn her elemanı için çalışır
//burada içerideki fonksiyonda her adımda startın yeni değeri tutuluyor.
const range=(start,stop,step)=>Array.from({length:Math.ceil((stop-start)/stop)},
  (_,i)=>start+i*stop
);

console.log(range(4,10,1));
console.log(range(1,10,2));

