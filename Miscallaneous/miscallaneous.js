const falsy_values = [false, 0, "", undefined, NaN, null];
console.log(falsy_values.forEach((value) => Boolean(value)));

// To check,if variable is null,we use typeof operator,
// But for null,we have to explicity check if variable is null using  === operator
// since object and null both return their type as object.
// if(variable === null){...}

let a = null;
console.log(typeof a); //Object!!!

console.log(null == undefined); //true
console.log(null === undefined); //false

let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined

// console.log(undeclared_variable) //ReferenceError
console.log(typeof undeclared_variable); //undefined

//You will have to comment line 11 to make rest pf code work (Wierd!)

let object1 = { name: "peter" };
console.log(typeof object1);

console.log(typeof NaN); //number

//Wierd thing coming....

let c = 0.1 + 0.2;
console.log(c); //0.30000000000000004

let b = 0.1 + 0.21;
console.log(b); //0.31

console.log(10 + 20); //30
console.log("10" + "20"); //1020
console.log(10 + "20"); //1020

//Addition of anything with NaN results in NaN
console.log(NaN + 10); //NaN
console.log(NaN + NaN); //NaN

console.log("5" * 2); //10 (Wierd!)
console.log(Infinity * 0); //NaN
console.log(Infinity * 2); //Infinity

console.log(Infinity / Infinity); //NaN
console.log(0 / 0); //NaN

const arr = [1, 2, 3];
arr[0] = [4];
console.log(arr); // [4,2,3]
arr = [1, 5, 6];
console.log(arr); // TypeError: Assignment to constant variable.

let guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];

console.log(
  guests.indexOf({
    name: "John Doe",
    age: 30,
  })
); // -1 (Wierd!)

/*
This is related to how JavaScript handles floating-point numbers.

console.log(0.1 + 0.2);`

This statement will print `0.30000000000000004` to the console. 
This is because JavaScript uses binary floating-point representation to store 
and perform calculations on decimal numbers. Due to the inherent limitations of binary representation, 
Certain decimal numbers cannot be represented exactly. In this case, the sum of `0.1` and `0.2` cannot be 
represented precisely in binary, resulting in a small rounding error.

*/


