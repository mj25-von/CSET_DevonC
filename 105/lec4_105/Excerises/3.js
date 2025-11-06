const prompt = require("prompt-sync")();
function groceryListManager() {
    let n = parseInt(prompt("Enter number of grocery items: "));
    let groceries = [];

    
    for (let i = 0; i < n; i++) {
        let item = prompt(`Enter item ${i + 1}: `);
        groceries.push(item);
    }

    console.log("Your grocery list:", groceries);

    
    while (true) {
        let search = prompt("Search for an item (type 'quit' to exit): ");
        if (search.toLowerCase() === "quit") {
            console.log("Exiting program...");
            break;
        }

        if (groceries.includes(search)) {
            console.log("Found");
        } else {
            console.log("Not found");
        }
    }
}

groceryListManager();
