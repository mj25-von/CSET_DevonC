//flatting

const arrays = [[1, 2, 3], [4, 5], [6]];

const flattened = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattened);


 function loop(value, test, update, body) {
  for (let current = value; test(current); current = update(current)) {
    body(current);
  }
}

loop(
  3,                   
  n => n > 0,   
  n => n - 1,          
  console.log          
);


