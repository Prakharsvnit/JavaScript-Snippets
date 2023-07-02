/*
functions are considered "first-class citizens" 
- can be assigned as variables
- can be stored as variable inside an object or an array
- passed as an argument to another function 
- returned by another function
*/

function add(a, b) {
  return a + b;
}

let sum = add; // function assigned to variable
console.log(sum(2, 4));
console.log(add(2, 4));

let arr = [1, 2, 3, add]; // function stored in an array
console.log(arr[3](6, 4));

// function passed as an argument to another function
function average(add, a, b) {
  return add(a, b) / 2;
}

console.log(average(add, 8, 4));

//returned by another function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Creating a function that doubles a number
const double = createMultiplier(2);

// Using the returned function to double a number
console.log(double(5)); // Output: 10
console.log(double(7)); // Output: 14
