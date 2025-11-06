console.log(Math.random());


console.log(Math.floor(Math.random() * 10));


console.log(Math.floor(Math.random() * 101));


console.log(Math.floor(Math.random() * 10) + 1);


function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randInt(5, 15)); 
