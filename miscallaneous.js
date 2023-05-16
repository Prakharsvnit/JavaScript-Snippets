let a = null;
console.log(typeof a) //Object!!! 

console.log(null == undefined) //true
console.log(null === undefined) //false

let counter
console.log(counter) // undefined
console.log(typeof counter) // undefined

console.log(typeof undeclared_variable) //undefined

let object1 = {name:"peter"}
console.log(typeof object1)

console.log(typeof NaN) //number

//Wierd thing coming....

let c = 0.1 + 0.2
console.log(c) //0.30000000000000004

let b = 0.1 + 0.21
console.log(b) //0.31