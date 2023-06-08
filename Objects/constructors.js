// constructor function is used to create UNIQUE objects.
// You can have the same properties as the constructor function or add a new property to one particular object
// To create an object from a constructor function, we use the new keyword. 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person = new Person('John','Doe');

// the above Person() function is equivalent to:
function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}

// and new operator creates the object as:
/*
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
*/ 

// Create multiple objects using Person() constructor function
let person1 = new Person('Jane','Doe')
let person2 = new Person('James','Smith')


// Adding methods to JavaScript constructor functions
function Person(firstName, lastName) {    

    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
let person3 = new Person("John", "Doe");
console.log(person3.getFullName());          // John Doe

