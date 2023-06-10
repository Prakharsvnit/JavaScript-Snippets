let a = null;
console.log(typeof a) //Object!!! 

console.log(null == undefined) //true
console.log(null === undefined) //false

let counter
console.log(counter) // undefined
console.log(typeof counter) // undefined

// console.log(undeclared_variable) //ReferenceError
console.log(typeof undeclared_variable) //undefined

//You will have to comment line 11 to make rest pf code work (Wierd!)

let object1 = {name:"peter"}
console.log(typeof object1)

console.log(typeof NaN) //number

//Wierd thing coming....

let c = 0.1 + 0.2
console.log(c) //0.30000000000000004

let b = 0.1 + 0.21
console.log(b) //0.31

console.log(10+20) //30
console.log('10' + '20') //1020
console.log(10 + '20')   //1020

//Addition of anything with NaN results in NaN
console.log(NaN + 10)  //NaN
console.log(NaN + NaN) //NaN

console.log('5' * 2) //10 (Wierd!)
console.log(Infinity * 0) //NaN
console.log(Infinity * 2) //Infinity

console.log(Infinity / Infinity)  //NaN
console.log(0/0)                  //NaN

const arr = [1,2,3];
arr[0] = [4];
console.log(arr);                  // [4,2,3]   
arr = [1,5,6];
console.log(arr);                  // TypeError: Assignment to constant variable.