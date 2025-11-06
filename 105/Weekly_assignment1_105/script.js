function digitAtPlace(n, i) {
  const shifted = Math.floor(n / Math.pow(10, i));
  if (shifted === 0) {
    return NaN;
  }
  return shifted % 10;
}


console.log(digitAtPlace(98765, 0)); 
console.log(digitAtPlace(98765, 2)); 
console.log(digitAtPlace(98765, 4)); 
console.log(digitAtPlace(98765, 5)); 
console.log(digitAtPlace(24680, 3)); 
