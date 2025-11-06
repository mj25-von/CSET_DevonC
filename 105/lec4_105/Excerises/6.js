const prompt = require("prompt-sync")();
function reverseNumber() {
    let num = prompt("Enter a number: ");
    let reversed = "";

    
    if (num[0] === "-") {
        reversed = "-" + num.slice(1).split("").reverse().join("");
    } else {
        reversed = num.split("").reverse().join("");
    }

    console.log("Reversed number:", reversed);
}

reverseNumber();
