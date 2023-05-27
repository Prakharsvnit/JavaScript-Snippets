//  spread operator ... is used to expand or spread an iterable or an array

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// cloning array using spread operator so that ORIGINAL Array isn't affected

let arr1 = [ 1, 2, 3];
let arr2 = arr1;    // Here, both variables arr1 and arr2 are referring to the same array. Hence the change in one variable results in the change in both variables.

console.log(arr1);  // [1, 2, 3]
console.log(arr2);  // [1, 2, 3]

arr1.push(4);

console.log(arr1);   // [1, 2, 3, 4]
console.log(arr2);   // [1, 2, 3, 4]

// ----x----x------x--------x-------x-----------x-----------

let arr3 = [...arr1];  // using spread operator,the change in one array is not reflected in the cloned array.
console.log(arr1); // [1, 2, 3]
console.log(arr3); // [1, 2, 3]

// append an item to the array
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr3); // [1, 2, 3]

// ----x----x------x--------x-------x-----------x-----------
// Copy array,objects using spread operator

// Concatenate array
const array1 = ['one', 'two'];
const array2 = ['three', 'four', 'five'];
const array3 = [...array1,...array2]

console.log(array3); //  ["one", "two", "three", "four", "five"]

// Copy array
const array4 = [...array3,'six','seven','eight']
console.log(array4)  //   ["one", "two", "three", "four", "five","six","seven","eight"]

// Copy object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}