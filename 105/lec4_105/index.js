const prompt = require("prompt-sync")();
var groceries = ["Milk","Eggs","Frosted Flakes","Salami","Juice"];

for (var i =0 ;i<groceries.length; i++) {
    var item = groceries[i];
}       

console.log(`Item ${i}: ${item}`);
groceries.push("Bread");
console.log(groceries);


groceries.unshift("Bananas");
console.log(groceries);

var firstitem = groceries.pop("Bananas");
console.log(groceries);






var groceries_boy = ['1','2','3','4'];
var groceries_girl = ['a','b','c','d']
var groceries= groceries_boy.concat(groceries_girl.concat(groceries_boy));
console.log(groceries);


let cars = ["Blackwing","SRT","Vette","AMG"];
cars.splice(1, 2, "Benz", "Trackhawk");
console.log(cars);

let cars = ["Blackwing","SRT","Vette","AMG"];
cars.splice(car1.length,0, "Trackhawk");
console.log(cars1);