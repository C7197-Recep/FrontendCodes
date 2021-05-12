// const input = document.getElementById("input-string")
// const input = document.querySelector(".display")
// const input = document.querySelector("p")



function reverseString(string) {
    console.log("Girilen Değer: ", string);

    var splittedString = string.split(" ");
    console.log("🚀 ~ file: script.js ~ line 11 ~ reverseString ~ splittedString", splittedString)

    var reversedArray = splittedString.reverse();
    console.log("🚀 ~ file: script.js ~ line 14 ~ reverseString ~ reversedArray", reversedArray)
    
    var joinedArray = reversedArray.join(" ");
    console.log("🚀 ~ file: script.js ~ line 17 ~ reverseString ~ joinedArray", joinedArray)

    document.querySelector("#display-string").innerText = joinedArray;
}




const input = document.querySelector("#input-string");
const button = document.querySelector("#submit-button");


button.addEventListener("click", () => {
    reverseString(input.value)
});

