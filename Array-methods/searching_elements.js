// .at method() saves the pain for finding the last element which we had to do like arr[arr.length-1]
// but now arr.at(-1) for lat  element in array,arr.at(-2) for second last element,and so on

const arr = [2,2,3,4,5]
console.log(arr.at(-1))   //5

// indexOf() method returns the index of the first occurrence of a specified element in the array.

let scores = [10, 20, 30, 10, 40, 20,10,40];
console.log(scores.indexOf(10))          

let guests = [
    {name: 'John Doe', age: 30},
    {name: 'Lily Bush', age: 20},
    {name: 'William Gate', age: 25}
];

console.log(guests.indexOf({
    name: 'John Doe',
    age: 30
})); // -1 (Wierd!)

// lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
console.log(scores.lastIndexOf(10))

// findIndex() method returns the index of the element that  
// satisfies a testing function or -1 if no element passed the test

let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);                  

// includes() method

let bmw = {name: 'BMW' }, 
    toyota = { name: 'Toyota'},
    ford = {name: 'Ford'}

let cars = [ford, toyota];

console.log(cars.includes(ford)); // true
console.log(cars.includes(bmw)); // false

// find() method is used to find the first element of an array that satisfies a provided testing function.

let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

console.log(customers.find(c => c.credit > 100));    //{ name: 'ACME Corp', credit: 200 }