function minTwo(a, b) {
  return (a < b) ? a : b;
}

function minThree(a, b, c) {
  return minTwo(minTwo(a, b), c);
}

function minOptional(a, b, c) {
  if (c === undefined) {
    return minTwo(a, b);
  } else {
    return minThree(a, b, c);
  }
}
console.log(minTwo(4, 7));        
console.log(minThree(4, 7, 2));   
console.log(minOptional(8, 3));   
console.log(minOptional(8, 3, 5));

function nthSeries1(n) {
  return (n * n) + (2 * n) - 1;
}

console.log(nthSeries1(1)); 
console.log(nthSeries1(2)); 
console.log(nthSeries1(3)); 
console.log(nthSeries1(4)); 

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(1)); 
console.log(factorial(5)); 

function fibonacci(n) {
  if (n <= 2) return 1;
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacci(1));
console.log(fibonacci(6));

function hcf(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(hcf(12, 18));

function lcm(a, b) {
  return (a * b) / hcf(a, b);
}

console.log(lcm(12, 18)); 


