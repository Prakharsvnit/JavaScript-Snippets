// Object.seal(): Allows modification of existing properties but prevents adding or removing properties.
// Object.freeze(): Prevents adding, removing, or modifying properties.

// seal() and freeze() methods make object immutable (cannot add or remove values or keys)
// key difference is seal() method allows modification of existing properties, but freeze() method doesn't allows any modification.

const person = {
    name: 'Alice',
    age: 30
};

Object.seal(person);

person.name = 'Bob'; // Allowed
person.age = 25;     // Allowed

person.gender = 'female'; // Not allowed, will be ignored

delete person.age; // Not allowed, will be ignored

console.log(person); // Output: { name: 'Bob', age: 25 }


// ------------------------------------------------------------------ //  


const car = {
    make: 'Toyota',
    model: 'Corolla'
};

Object.freeze(car);

car.make = 'Honda'; // Not allowed, will be ignored
car.year = 2021;    // Not allowed, will be ignored

delete car.model;   // Not allowed, will be ignored

console.log(car); // Output: { make: 'Toyota', model: 'Corolla' }