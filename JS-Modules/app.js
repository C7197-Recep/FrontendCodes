// import {sender} from "./package.js";
/*AŞAĞIDAKİ YÖNTEMDE AYNI İSİMLİ FONKSİYONLAR ÇAKIŞIR*/
//import {f1,f2} from "./package.js";
//import {f1,f2} from "./module1.js";
/*NAMESPACE YÖNTEMİ FONKSİYON ÇAKIŞMASINI ENGELLER*/
import * as p from "./package.js";
import * as m from "./module1.js";

// sender.receive("message:hello");
// sender.receive("message:howdy");
// console.log(sender.store);

/*BU YÖNTEM FARKLI MODÜLLERDEKİ AYNI İSİMLİ FONKSİYONLAR
AYNI ANDA KULLANABİLMEYİ SAĞLAR */
p.sender.receive("message:hello");
p.sender.receive("message:howdy");
p.console.log(sender.store);

m.f1();
p.f1();