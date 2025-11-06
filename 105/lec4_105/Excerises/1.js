const prompt = require("prompt-sync")();
function sumArray() {
    let n = parseInt(prompt("Enter number of elements: "));
    let arr = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Enter number ${i + 1}: `));
        arr.push(num);
        sum += num;
    }

    console.log("Array:", arr);
    console.log("Sum of array:", sum);
}

sumArray();

function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log("Fibonacci sequence:", fib);
    console.log(`${n}th Fibonacci number is:`, fib[n]);
}
