// indexOf() method

let scores = [10, 20, 30, 10, 40, 20];
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