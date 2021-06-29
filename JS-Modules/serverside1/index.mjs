/*SUNUCU TARAFI NODE.JS I SIMULE EDIYOR
DENEMEK İÇİN TERMİNALDE BU KLASÖR İÇİNDE

node index.js 

YAZIP ÇALIŞTIR*/
import sayHi from './module.mjs';


console.log(sayHi("Matthew"));

import {inc, getCounter} from "./module.mjs";

console.log(getCounter());
inc();
inc();
inc();
console.log(getCounter());