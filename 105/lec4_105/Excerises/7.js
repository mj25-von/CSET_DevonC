const prompt = require("prompt-sync")();
function myToUpperCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(myToUpperCase("I am Daniel")); 
