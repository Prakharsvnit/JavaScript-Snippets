// Every object and function has its own property called prototype.
// Objects can inherit features from one another via prototypes.
// Because a prototype itself is also another object, the prototype has its own prototype. 
// This creates a something called Prototype Chain.

// Constructor function to create object.
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

// you can not add a new property to an existing object constructor by doing:
Person.nationality = "Indian";
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.nationality)               // undefined

// To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.motherTongue = "English";             // new property
}

// BUT, prototype property allows you to add new properties, methods to object constructors:
// This property is called prototype inheritance.
Person.prototype.ears = 2
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName
}