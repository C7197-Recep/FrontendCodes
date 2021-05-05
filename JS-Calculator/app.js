document.getElementById("ac").addEventListener("click", ac);
document.getElementById("plusminus").addEventListener("click", plusminus);
document.getElementById("percntage").addEventListener("click", percntage);
document.getElementById("division").addEventListener("click", division);
document.getElementById("seven").addEventListener("click", seven);
document.getElementById("eight").addEventListener("click", eight);
document.getElementById("nine").addEventListener("click", nine);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("four").addEventListener("click", four);
document.getElementById("five").addEventListener("click", five);
document.getElementById("six").addEventListener("click", six);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("one").addEventListener("click", one);
document.getElementById("two").addEventListener("click", two);
document.getElementById("three").addEventListener("click", three);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("zero").addEventListener("click", zero);
document.getElementById("comma").addEventListener("click", comma);
document.getElementById("equal").addEventListener("click", equal);

const screen = document.getElementById("scrn");

function zero() {
    scrn.value += "0";
}
function one() {
    screen.value += "1";
}
function two() {
    screen.value += "2";
}
function three() {
    screen.value += "3";
}
function four() {
    screen.value += "4";
}
function five() {
    screen.value += "5";
}
function six() {
    screen.value += "6";
}
function seven() {
    screen.value += "7";
}
function eight() {
    screen.value += "8";
}
function nine() {
    screen.value += "9";
}
function plus() {
    screen.value += "+";
}
function minus() {
    screen.value += "-";
}
function multiply() {
    screen.value += "*";
}
function division() {
    screen.value += "/";
}
function percntage () {
    screen.value += "%";
}
function plusminus () {
    if ((parseInt(screen.value)) > 0 ){
        screen.value = `-${screen.value}`;
    }else if ((parseInt(screen.value)) < 0 ){
        screen.value = `${screen.value.substr(1)}`;
    }
    else {
        screen.value = screen.value;
    }
    
}
function comma () {
    screen.value += "."
}
function ac () {
    screen.value = "";
}
function equal() {
    if ((screen.value.indexOf('%') < 0) ){
        screen.value = eval(screen.value);
    }
    else {
        let k = screen.value.indexOf("%");
        screen.value = eval((screen.value.slice(0,k))*(screen.value.slice(k+1))/100);
    }
}