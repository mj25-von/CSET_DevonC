// 1. myMap
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// 2. myFilter
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// 3. mySort (using selection-sort logic)
function getMinIndex(array) {
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function mySort(array) {
  const arr = array.slice(); 
  const sorted = [];
  while (arr.length > 0) {
    const minIndex = getMinIndex(arr);
    sorted.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return sorted;
}

// 4. myConcat
function myConcat(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) result.push(arr1[i]);
  for (let j = 0; j < arr2.length; j++) result.push(arr2[j]);
  return result;
}

// 5. myEvery
function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
}

// 6. mySome
function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
}

// 7. myIncludes
function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

// 8. myJoin
function myJoin(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) result += separator;
  }
  return result;
}

// 9. myFind
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return array[i];
  }
  return undefined;
}

// 10. myFindIndex
function myFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return i;
  }
  return -1;
}

// 11. myIndexOf
function myIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

// 12. myFill
function myFill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}

// 13. myReverse
function myReverse(array) {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

// 14. myShift
function myShift(array) {
  if (array.length === 0) return undefined;
  const first = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array.length = array.length - 1;
  return first;
}

// 15. myUnshift
function myUnshift(array, ...values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    newArr[i] = values[i];
  }
  for (let j = 0; j < array.length; j++) {
    newArr[values.length + j] = array[j];
  }
  return newArr;
}

console.log("myMap:", myMap([1, 2, 3], x => x * 2));
console.log("myFilter:", myFilter([1, 2, 3, 4], x => x % 2 === 0));
console.log("mySort:", mySort([3, 1, 4, 2]));
console.log("myConcat:", myConcat([1, 2], [3, 4]));
console.log("myEvery:", myEvery([2, 4, 6], x => x % 2 === 0));
console.log("mySome:", mySome([1, 3, 5, 8], x => x % 2 === 0));
console.log("myIncludes:", myIncludes([1, 2, 3], 2));
console.log("myJoin:", myJoin(["a", "b", "c"], "-"));
console.log("myFind:", myFind([1, 3, 5, 6], x => x % 2 === 0));
console.log("myFindIndex:", myFindIndex([1, 3, 5, 6], x => x % 2 === 0));
console.log("myIndexOf:", myIndexOf([10, 20, 30], 20));
console.log("myFill:", myFill([1, 2, 3, 4], 0, 1, 3));
console.log("myReverse:", myReverse([1, 2, 3]));
let arr1 = [1, 2, 3];
console.log("myShift:", myShift(arr1), arr1);
console.log("myUnshift:", myUnshift([3, 4], 1, 2));
