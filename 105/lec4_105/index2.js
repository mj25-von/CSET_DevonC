function showArgs(a, b,...args){
    console.log("rest=", args);
}
showArgs(1,2,3,4,5);

function max(...numbers){
    return Math.max(...numbers);
}
console.log(max(4,1,9,-2));
console.log(max(100,200,20))

function sumTwo(...args){
    let sum =0;
    for (const arg of args){
        sum +=arg;
    }
    return sum;
}
console.log(sumTwo);