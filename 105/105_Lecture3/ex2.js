function printMultiplicationTables(x, y, a, b) {
    for (let i = x; i <= y; i++) {
        for (let j = a; j <= b; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

while (true) {
    try {
        let input = prompt("Enter 4 integers (x y a b), separated by spaces:");
        if (!input) throw new Error("No input provided");

        let parts = input.trim().split(/\s+/);
        if (parts.length !== 4) throw new Error("Please enter exactly 4 numbers.");

        let [x, y, a, b] = parts.map(Number);

        if ([x, y, a, b].some(isNaN)) {
            throw new Error("Invalid input. Program terminated.");
        }

        printMultiplicationTables(x, y, a, b);
    } catch (err) {
        console.error(err.message);
        break;
    }
}
