// Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. 
// However, unlike an array, a Set cannot contain duplicate values.

// Create new Set Collection
let people = new Set();
console.log(typeof people);      // object

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

/*
Methods and properties in Set collection are:
people.add(value) – adds a value, returns the people itself.
people.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
people.has(value) – returns true if the value exists in the people, otherwise false.
people.clear() – removes everything from the people.
people.size – is the elements count.
*/

people.add(john);
people.add(pete);
people.add(mary);
people.add(john);
people.add(mary);

// Set keeps only unique values
console.log( people.size ); // 3