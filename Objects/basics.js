// Object example
const student = { 
    name: 'John',                         // name -> key,'John' -> value ; "key: value" pairs are called properties
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}   

// Access object properties
console.log(student.name)                    // John
console.log(student["name"])                 // John
console.log(student.marks.science)           // 70
console.log(student["marks"]["science"])     // 70

// Ways to create Objects
let obj = Object.create(null);            // Object's create method
let person = {name: "Peter",age:26}       // Object literal syntax

function Person(name,age) {               // Function constructor
    this.name = name;
    this.age = age;
}
let person_obj = new Person("Peter",26);

class Person {                            // ES6 class syntax
    constructor(name) {
      this.name = name;
    }
  }
  
let person_object = new Person("Sudheer");

