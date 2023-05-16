/*
String Conversion
Occurs when we output something. Can be performed with String(value)
*/

let value = true
console.log(value,typeof value)

value = String(value)
console.log(value,typeof value)

/*
Numeric conversion
Occurs in math operations. Can be performed with Number(value)
*/

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

console.log(Number(null))           // 0
console.log(Number(undefined))     // NaN

/*
Boolean Conversion
Occurs in logical operations. Can be performed with Boolean(value)
*/

console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(false))

//output for above are false

console.log(Boolean(true))  
console.log(Boolean("peter"))
console.log(Boolean(1))
console.log(Boolean({name:"John"}))

//output for above are true