// map() method iterates over elements and transforms them according to callback function
// and RETURNS NEW Array,DOESN'T ALTERS ORIGINAL ARRAY 

// Example 1
let numbers = [16, 25, 36];
let result = numbers.map(number => Math.sqrt(number))
console.log(result);     // [4,5,6]
console.log(numbers)     // [16,25,36]

// Exmaple 2
let circles_radius = [10, 30, 50];
let areas = circles_radius.map(radius => Math.floor(Math.PI * radius * radius));
console.log(areas);           // [ 314, 2827, 7853 ]
console.log(circles_radius)   // [ 10, 30, 50 ]