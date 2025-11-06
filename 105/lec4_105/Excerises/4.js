const prompt = require("prompt-sync")();
function groceryListManager() {
    let groceries = [];

    while (true) {
        let choice = prompt(
            "Choose an option:\n1. Add item\n2. Search item\n3. Remove item\n4. Print list\n5. Exit"
        );

        if (choice === "1") {
            
            let item = prompt("Enter item to add: ").toLowerCase();

            if (groceries.includes(item)) {
                console.log("Item is already present.");
            } else {
                groceries.push(item);
                console.log(item + " added to list.");
            }

        } else if (choice === "2") {
            
            let search = prompt("Enter item to search: ").toLowerCase();

            if (groceries.includes(search)) {
                console.log("Found");
            } else {
                console.log("Not found");
            }

        } else if (choice === "3") {
            
            let removeItem = prompt("Enter item to remove: ").toLowerCase();

            if (groceries.includes(removeItem)) {
                groceries = groceries.filter(item => item !== removeItem);
                console.log(removeItem + " removed from list.");
            } else {
                console.log("Item does not exist.");
            }

        } else if (choice === "4") {
            
            if (groceries.length === 0) {
                console.log("The grocery list is empty.");
            } else {
                console.log("Your grocery list:");
                for (let i = 0; i < groceries.length; i++) {
                    let formatted =
                        groceries[i].charAt(0).toUpperCase() + groceries[i].slice(1);
                    console.log((i + 1) + ". " + formatted);
                }
            }

        } else if (choice === "5") {
            
            console.log("Exiting program...");
            break;

        } else {
            console.log("Invalid option. Please choose 1–5.");
        }
    }
}

groceryListManager();
