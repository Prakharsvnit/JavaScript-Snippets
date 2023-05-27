// destructuring makes it easy to assign array values and object properties to distinct variables

// Array destructuring
const arrValue = ['one', 'two', 'three'];

const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

// Object destructuring
const person = {
    fullname: 'Sara',
    age: 25,
    gender: 'female'    
}

let { fullname, age, gender } = person;

console.log(fullname); // Sara
console.log(age);     // 25
console.log(gender); // female