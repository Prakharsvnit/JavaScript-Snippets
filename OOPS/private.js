// Private fields and methods allow you to define class members that are not accessible from outside the class, providing a form of encapsulation. 
// Private fields and methods are declared using a hash (`#`) before their names.


class Person {
    #name; // Private field

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const person = new Person('John');
console.log(person.getName()); // Accesses the private field through a public method



class Counter {
    #count = 0; // Private field

    #increment() { // Private method
        this.#count++;
    }

    getCount() {
        this.#increment(); // Accesses the private method
        return this.#count;
    }
}

const counter = new Counter();
console.log(counter.getCount()); // Accesses the private method through a public method
// console.log(counter.#increment()); // Error: Private method '#increment' is not defined in this context
