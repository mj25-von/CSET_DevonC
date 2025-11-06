/*let book = {
    title: "JavaScript Essentails",
    author: "Mary Jane",
    pages: 304,
    publisher: "Tech books Publishing",
    read: function(){
        console.log("Reading" + this.title + "by" + this.author);
    }
}
console.log("Title:", book,title);
console.log("Author:", )*/

/*let data = {
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}
console.log(data);
console.log(data.squirrel);
console.log(data.events[2]);*/

class car {
    constructor(brand, model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        console.log(`${this.brand} ${this.model} (${this.year})`);
    }
}
let mycar = new car ("Cadillac", "CTS-V Blackwing", 2025);
mycar.displayInfo();