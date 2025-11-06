const prompt = require("prompt-sync")();
function myMax(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(myMax(3, 7, 2, 9, 5));
