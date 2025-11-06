const student = {
  name: "Devon",
  age: 20,
  course: "Software Engineering"
};

console.log(student.name);
console.log(student["course"]);


const car = {
  brand: "Toyota",
  model: "Camry",
  start: function() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
};

car.start();

// JS Object ^

const user = {
  username: "devon123",
  email: "devon@example.com",
  isActive: true
};


const jsonData = JSON.stringify(user);
console.log(jsonData);


const jsonString = '{"title":"Intro to JS","level":"Beginner"}';

const course = JSON.parse(jsonString);
console.log(course.title);

// JSON ^

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const devon = new Person("Devon", 20);
devon.greet();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); 

// OOP ^