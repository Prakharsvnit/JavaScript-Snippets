// Suppose if u want your original array to be not mutated(immutable) but create a change in element of array 
// Problem is you have these methods:

const arr = [1,2,3,4];
arr[3] = 67;

console.log(arr)   //[ 1, 2, 3, 67 ]
// Now,this method mutates the array,and we "lost" original array.Another work around is using spread operator

const originalArr = [1,2,3,4];
const copyArr = [...arr];
copyArr[3] = 67;
console.log("Original arr",originalArr);       // Original arr [ 1, 2, 3, 4 ]
console.log("Copied arr",copyArr);             // Copied arr [ 1, 2, 3, 67 ]

// This solves the problem of keeping the original array immutable but don;t you see there is lot of code 
// involved. JavaScript recently released new mwthod to resolve this:

const array1 = [1, , 3, 4, , 6];
console.log(array1.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
