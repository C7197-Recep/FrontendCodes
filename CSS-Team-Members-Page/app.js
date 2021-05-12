
var the_switch = document.getElementById('switch');
var header = document.getElementsByTagName("header")[0];
var main = document.getElementsByTagName("main")[0];

the_switch.addEventListener('click', () => {
    the_switch.getElementsByTagName("input")[0].checked ? dark():light();
});

function light(){
    document.body.style.backgroundColor="#f3f3f3";
    header.style.color="black";
    main.style.color="black";
}

function dark(){
    document.body.style.backgroundColor="black";
    header.style.color="#c9d1d9";
    main.style.color="#58a6ff";
}