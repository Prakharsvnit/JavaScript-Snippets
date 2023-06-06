/*
functions are considered "first-class citizens" 
They can be stored as :
- variable inside an object or an array
- passed as an argument to another function 
- returned by another function
*/

function add(a,b){
    return a + b;
}

//Functions are treated like any other variable.
let sum = add;
console.log(sum(2,4));
console.log(add(2,4));

//Pass a function as an argument into another function.
function cmToIn(length) {
    return length / 2.54;
  }
  
function inToCm(length) {
    return length * 2.54;
}
  
//Function(fn) returned by another function(convert) taking function(fn) as arguement 
function convert(fn, length) {
    return fn(length);
}
  
let inches = convert(cmToIn, 10);
console.log(inches);
  
let cm = convert(inToCm, 10);
console.log(cm);