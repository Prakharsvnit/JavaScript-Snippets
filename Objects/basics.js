// Object is an unordered list of key-value pairs. 
// The key is usually a string or a symbol. 
// The value can be of type -> string, boolean, number, undefined,null,object,function.


// Object example
const student = { 
  name: 'John',                         
  age: 20,
  marks: {science: 70, math: 75},
  percentage: function() {
      const totalMarks = Object.values(this.marks).reduce((acc, val) => acc + val, 0);
      const percentage = (totalMarks / (Object.keys(this.marks).length * 100)) * 100;
      return percentage;
  }
}

// Access object properties
console.log(student.name)                    // John
console.log(student["name"])                 // John
console.log(student.marks.science)           // 70
console.log(student["marks"]["science"])     // 70
console.log(student.percentage());           // 72.5

// Ways to create Objects
let obj = Object.create(null);            // Object's create method
let person = {name: "Peter",age:26}       // Object literal syntax

function Person(name,age) {               // Function constructor
    this.name = name;
    this.age = age;
}
let person_obj = new Person("Peter",26);

class Individual {                            // ES6 class syntax
    constructor(name) {
      this.name = name;
    }
  }
  
let person_object = new Individual("Peter");

