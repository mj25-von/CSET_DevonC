function removeElement(arr, index) {
    if (index < 0 || index >= arr.length) {
        console.log("Invalid index");
        return arr;
    }
    arr.splice(index, 1);
    return arr;
}


let animals = ["cat", "dog", "lion", "tiger", "bear"];
console.log(removeElement(animals, 2)); 

function addElement(arr, index, element) {
    if (index < 0 || index > arr.length) {
        console.log("Invalid index");
        return arr;
    }
    arr.splice(index, 0, element); 
    return arr;
}
console.log(addElement(animals, 2, "bear")); 
