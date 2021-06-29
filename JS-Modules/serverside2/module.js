//----module1.js----

export default function greet(user){
    return `Welcome ${user}`;
}

function f1(){
    return 1;
}

function f2(){
    return 2;
}

function f3(){
    return 3;
}

let counter=0;

function inc(){
    counter++;
}

function dec(){
    counter--;
}

function getCounter(){
    return counter;
}

export {dec, inc, getCounter};