// In JavaScript classes, static methods and properties that belong to the class, rather than an instance. 
// They are defined using the static keyword.

class MathOperations {
    
    static add(x, y) {
        return x + y;
    }

    static pi = 3.14;

}

const result = MathOperations.add(5, 3); // Calls the static method directly on the class
console.log(result); // Output: 8

const pi = Circle.pi; // Accesses the static property directly on the class
console.log(pi)

// Static methods and properties are useful for utility functions or constants associated with a class that don't depend on specific instances. 
// They are accessed directly on the class, providing a way to organize and encapsulate related functionality.