/*SUNUCU TARAFI NODE.JS I SIMULE EDIYOR
DENEMEK İÇİN TERMİNALDE BU KLASÖR İÇİNDE

node index.js 

YAZIP ÇALIŞTIR*/

/*node.js de import un çalışması için uzantı mjs olmalı
İKİNCİ YÖNTEM OLARAK yarn YÜKLE, 

yarn init YA DA npm init 

YAP OLUŞAN package.json DOSYASINA 

"type" : "module",

GİR. VE ARTIK BROWSERDA YAZDIĞIN JS NODE.JS SUNUCUSUNDA ÇALIŞIR.

require İÇEREN node.js SCRITPLERINI BROWSERDDA
KULLANMAK İÇİN YA İmporta ÇEVRİLEMELİ YA DA require.js EKLENTİSİ VS.*/
import sayHi from './module.js';


console.log(sayHi("Matthew"));

import {inc, getCounter} from "./module.js";

console.log(getCounter());
inc();
inc();
inc();
console.log(getCounter());