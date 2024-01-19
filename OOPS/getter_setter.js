// Getters are used for reading the value of a property, and setters are used for modifying or assigning a value to a property.
// Getters are defined using the get keyword followed by the method name.
// Getters are invoked without using parentheses.
// Setters are defined using the `set` keyword followed by the method name.
// Setters are invoked when a value is assigned to the property using the assignment operator (`=`).

class Circle {
    constructor(radius) {
        this._radius = radius; 
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius > 0) {
        this._radius = newRadius;
        } else {
        console.error("Radius must be greater than 0");
        }
    }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Accesses the getter without using parentheses
myCircle.radius = 8;          // Invokes the setter to update the radius
console.log(myCircle.radius); // Accesses the updated value using the getter
     


// Here,_radius proprty is intended to be private (_propertyName naming convention folowed)
// The intention is to encourage developers to use the provided getter and setter methods to interact with the property
// However, The true encapsulation is done using # symbol for private fields [discussed in private.js]
