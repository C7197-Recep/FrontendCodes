let number_input=document.getElementById("number");
let check_button=document.getElementById("check");
let answer_area=document.getElementById("answer");
let attempt_area=document.getElementById("attempt");
let feedback_area=document.getElementById("feedback");
let retry_btn=document.getElementById("retry");

/*0-100 ARASI RANDOM BIR SAYI OLUSTUR. TRUNC FONKSIYONUYLA ONDALIKLARI AT*/
var numonmind=Math.trunc(Math.random()*100);
var attempts_left=5;

function check(){
    let num=number_input.value;
    if(attempts_left<=1){
        feedback_area.innerHTML="The answer was "+ `${numonmind}`+ ". You have no attempts. Sorry, You lost!";
        retry_btn.style.display="block";
        return;
    }
    if (num<=100 && num>=0 && !num.includes("e") && num!=""){
       answer_area.innerHTML=num;
       attempts_left-=1;
       attempt_area.innerHTML=attempts_left;
       if(num==numonmind){
            feedback_area.innerHTML="Correct. You won!"
       }else if(num<numonmind){
            feedback_area.innerHTML="Guess Higher";
       }else{
        feedback_area.innerHTML="Guess Lower";
       }
    }else{
        feedback_area.innerHTML="Please put valid a number between 1-100."
    }
}

function retry(){
    attempts_left=5;
    answer_area.innerHTML="No answers yet"; 
    attempt_area.innerHTML="5";
    feedback_area.innerHTML="Ok, I believe in second chances. Good luck..."
}