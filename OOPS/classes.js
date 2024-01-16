/*
Classes were introduced in ES6. Before that,to mimic a class,constructor/prototype pattern was used.
Class is a blueprint for creating objects. It encapsulates data & functions that manipulate data. 
*/

// Class declaration
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
  
    makeSound() {
      console.log("Some generic animal sound");
    }
}
  
// Instance of class
const tiger = new Animal("Tony", "Tiger");
  
console.log(tiger.name);      // Tony
console.log(tiger.species);   // Tiger
tiger.makeSound();            // Some generic animal sound


/*
Explanation:

The class keyword is used to create a class. The properties are assigned in a constructor function.

Constructor method is called when an instance of the class is created. 
this refers to the instance of the class that will be created using Animal class
this.name and this.species are properties of the instance that will store the values passed in when creating a new instance of the Animal class.

There's a method named makeSound within the class.

On Line 19:
A new object(or instance of Animal class) is created using the new keyword & the constructor method is called,
constructor method initializes the object's properties (name and species) given as arguements(Tony,Tiger) by tiger object.

Inside the constructor method, this.name and this.species are used to assign the values of name and species parameters(Tony,Tiger) to the respective properties of the class.

Now, access the properties and call methods on the created instance(object).
*/


// For constructors: Refer https://github.com/Prakharsvnit/JavaScript-Snippets/blob/master/Objects/constructors.js
  