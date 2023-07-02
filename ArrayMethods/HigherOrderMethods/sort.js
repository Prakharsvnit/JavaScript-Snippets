// sort() returns the array after sorting in ascending/descending order.It CHANGES the original array
// Syntax : sort(compareFunction)

let arr = [1,7,14,9];
arr.sort()
console.log(arr);                   // [ 1, 14, 7, 9 ]

// NOTE: The items are sorted as strings in ascending order by default.
// FIX: For integers,pass a compare function to the sort() method.
//      For strings,use localeCompare function


// Sorting array of integers

arr.sort((a,b) => a - b);
console.log("ascending order",arr);  // [ 1, 7, 9, 14 ]

arr.sort((a,b) => b - a);
console.log("descending order",arr);  // [ 14, 9, 7, 1 ]

// Sorting array of strings

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

animals.sort();
console.log("ascending order",animals);                 // [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

animals.sort((a,b) => b.localeCompare(a));
console.log("descending order",animals);                 //  [ 'elephant', 'dog', 'cat', 'bee', 'ant' ]

animals.sort((a,b) => a.localeCompare(b));
console.log("ascending order 1",animals);                 //  [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

let mixedCaseAnimals = ['ant', 'Bee', 'Cat', 'dog', 'Elephant'];

mixedCaseAnimals.sort((a, b) => a.localeCompare(b));
console.log("ascending order", mixedCaseAnimals); // [ 'ant', 'Bee', 'Cat', 'dog', 'Elephant' ]


// Sorting objects by a numeric property

let employees = [
    {name: 'John', salary: 90000},
    {name: 'David', salary: 75000},
    {name: 'Ana', salary: 80000}
];

employees.sort((x, y) => x.salary - y.salary);
console.log("ascending order of salary of employees",employees);