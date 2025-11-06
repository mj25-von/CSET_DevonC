class Matrix2x2 {
  constructor(values) {
    if (!Array.isArray(values) || values.length !== 4) {
      throw new Error("Matrix2x2 must be initialized with an array of 4 numbers.");
    }
    this.values = values;
  }

  
  get(x, y) {
    return this.values[x * 2 + y]; 
  }

  
  scalarMultiply(scalar) {
    return new Matrix2x2(this.values.map(v => v * scalar));
  }

  
  add(other) {
    return new Matrix2x2(this.values.map((v, i) => v + other.values[i]));
  }

  
  subtract(other) {
    return new Matrix2x2(this.values.map((v, i) => v - other.values[i]));
  }

  
  determinant() {
    const [a, b, c, d] = this.values;
    return a * d - b * c;
  }

  
  inverse() {
    const det = this.determinant();
    if (det === 0) throw new Error("Matrix is not invertible.");

    const [a, b, c, d] = this.values;
    const inverseValues = [d, -b, -c, a].map(v => v / det);
    return new Matrix2x2(inverseValues);
  }

  
  multiply(other) {
    const a = this.values;
    const b = other.values;
    return new Matrix2x2([
      a[0] * b[0] + a[1] * b[2],
      a[0] * b[1] + a[1] * b[3],
      a[2] * b[0] + a[3] * b[2],
      a[2] * b[1] + a[3] * b[3],
    ]);
  }

  
  print() {
    console.log(`[ ${this.values[0]}  ${this.values[1]} ]`);
    console.log(`[ ${this.values[2]}  ${this.values[3]} ]`);
  }
}


const matrixList = [];


function addMatrix(matrix) {
  matrixList.push(matrix);
}


function updateMatrix(index, newMatrix) {
  if (index >= 0 && index < matrixList.length) {
    matrixList[index] = newMatrix;
  } else {
    console.log("Invalid index.");
  }
}


function removeMatrix(index) {
  if (index >= 0 && index < matrixList.length) {
    matrixList.splice(index, 1);
  } else {
    console.log("Invalid index.");
  }
}




const m1 = new Matrix2x2([1, 2, 3, 4]);
const m2 = new Matrix2x2([2, 0, 1, 2]);


addMatrix(m1);
addMatrix(m2);


console.log("Matrix 1:");
m1.print();

console.log("Matrix 2:");
m2.print();

console.log("Addition Result:");
m1.add(m2).print();

console.log("Subtraction Result:");
m1.subtract(m2).print();

console.log("Scalar Multiply by 3:");
m1.scalarMultiply(3).print();

console.log("Determinant of m1:", m1.determinant());

console.log("Inverse of m2:");
m2.inverse().print();

console.log("Matrix Multiplication (m1 * m2):");
m1.multiply(m2).print();


updateMatrix(0, new Matrix2x2([5, 6, 7, 8]));
removeMatrix(1);
console.log("Matrix list after update and remove:", matrixList);


// Using OOP makes handling matrices way easier and more organized since each one got its own data and tools built in
// It keeps everything together so the code looks cleaner and makes more sense when you go back to read it
// If you didn’t use OOP youd be stuck juggling a bunch of separate functions and arrays which would just get messy fast
// Thats why OOP feels like the smarter more put-together way to handle stuff like this
