
// function sum(f){
    // f();


// function func(){
    // console.log("I am  Func");


// function kun(){
    // console.log("I am Kun")

// sum(func);
// sum(kun);

// function formalGreeting() {
// console.log("How are you?");


// function casualGreeting() {
// console.log("What's up?");


// function greet(type, greetFormal, greetCasual) {
// if (type === 'formal') {
// greetFormal(); 
// } else if (type === 'casual') {
// greetCasual(); 

// greet('casual', formalGreeting, casualGreeting);



// function greet(name, formatter){
    // return "Hello," + formatter(name);

//  function uppercase(str){
    // return str.toUpperCase();

//  console.log(greet("Crosson", uppercase));

//  let nums = [5,10,15];
//  let result = nums.map((item, index, arr)=>{
// return item* index;
//  });
//  console.log(result);

//  function op(item, i, arr){
    // if (arr.length<=5){return item*i;}
    // else{
        // return item
    // }
//  }
 

// let numbers = [1,2,3,4,5,6];
// let evens = numbers.filter((num)=>num%2 ===0);
// console.log(evens);

const persons = [
    { name: 'Devon', age: 43 },
    { name: 'James', age: 47 },
    { name: 'Milton', age: 38 },
    { name: 'Crosson', age: 55 },
];

const fullAge = [];

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        fullAge.push(persons[i]);
    }
}
console.log(fullAge);

// let student = {
    // name: "Devon",
    // age: 20,
    // course: "CSET 105",

// console.log(student.name);
// console.log(student["age"]);
// student.grade = "B+";
// student.age = 20;
// console.log(student);

// const arr = [5,7,1,8,4];

// const sum = arr.reduce(function(accumulator, currentValue) {
    // return accumulator + currentValue;
// }, 10);
// console.log(sum);

// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce ((acc, num)=> acc + num, 0);
// console.log(sum);

let numbers = [0, 1 , 8, 2, 3, 5, 10, 20, 30, 59, 83 ];
numbers.sort((a,b)=>a-b);
console.log(numbers);