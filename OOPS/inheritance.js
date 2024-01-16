// Inheritance feature allows code reusability.
// Using class inheritance, a class can inherit all the methods and properties of another class.


class Animal {
    constructor(name) {
    this.name = name;
    }

eat() {
    console.log(`${this.name} is eating.`);
    }
}
  
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}
  
const myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog.name);  // Buddy
console.log(myDog.breed); // Golden Retriever

/*
Explanation:

The Animal class is called a base class or parent class while the Dog class is known as a derived class or child class. 
By using extends keyword, the Dog class inherits all methods and properties of the Animal class.

In the Dog's constructor, call super() to invoke the Animal‘s constructor with the name argument.
Here, super() inside Dog class refers to the Animal class. Hence, when the constructor of Animal class is called, 
it also calls the constructor of the Animal class which assigns a name property to it.


NOTE:

JavaScript requires the child class to call super() if child class has a constructor. 
If the child class has constructor and it doesn't calls super() inside it's constructor. following error occurs:

ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
*/


/* 
Sources:
https://www.w3schools.com/js/js_class_inheritance.asp
https://www.programiz.com/javascript/inheritance
https://www.javascripttutorial.net/es6/javascript-inheritance/
*/