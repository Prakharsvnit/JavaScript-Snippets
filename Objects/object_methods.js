// Object is an unordered list of key-value pairs.

// .keys() method returns an array of keys of object
// .values() method returns an array of values of object
// .entries() method returns an array of [key, value] pairs of object

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

const student_keys = Object.keys(student)
const student_values = Object.values(student)
const student_entries = Object.entries(student)

console.log(student_keys)     // [ 'name', 'age', 'marks', 'percentage' ]
console.log(student_values)   // [ 'John', 20, { science: 70, math: 75 }, [Function: percentage] ]
console.log(student_entries)  // [ [ 'name', 'John' ],[ 'age', 20 ],[ 'marks', { science: 70, math: 75 } ],[ 'percentage', [Function: percentage] ]]

//  .fromEntries() method creates an object from a list of key-value pairs.
const student_object = Object.fromEntries(student_entries)
console.log(student_object) 
/* 
{
  name: 'John',
  age: 20,
  marks: { science: 70, math: 75 },
  percentage: [Function: percentage]
}
*/

// .assign() method copies all the iterable properties of the given objects to a single object and returns it.

// .assign() method to clone objects
let car = {
    color: 'red',
    fuel: 'diesel',
    cost: 180000
};

let clonedMotorcycle = Object.assign({}, car);
console.log(clonedMotorcycle);        // { color: 'red', fuel: 'diesel', cost: 180000 }

// .assign() method to merge objects
let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);
console.log(styleBox);                 // { height: 10, width: 20, color: 'Red', borderStyle: 'solid' }


// .freeze() method freezes an object i.e. it prevents the object from being modified.
let obj = {
    // prop: function () {},
    foo: "bar",
  };
  
  // freeze the obj object
  let o = Object.freeze(obj);
  
  // changes will fail silently
  obj.foo = "bar1";
  console.log(obj.foo);        // bar
  
  // cannot add a new property 
  obj.new_foo = "bar";
  console.log(obj.new_foo);    // undefined