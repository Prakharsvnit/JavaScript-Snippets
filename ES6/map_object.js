// Map object holds key-value pairs.
// Keys are unique in a Map’s collection.
// NOTE: Map can contain objects, functions and other data types as key.

// Create a new Map object
let john = {name: 'John Doe',age:26},
    lily = {name: 'Lily Bush',age:33},
    peter = {name: 'Peter Drucker',age:34};

let userRoles = new Map();
console.log(typeof(userRoles)); // object

/* Methods and properties in Map object are:
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

userRoles.set(john, 'admin');  
userRoles.set(lily,'HR');
userRoles.set(peter,'developer')
console.log(userRoles);

console.log(userRoles.get(lily));    // HR
console.log(userRoles.has(john));    // true
console.log(userRoles.delete(peter));
console.log(userRoles.has(peter));    // false (key => peter has been deleted)
console.log(userRoles.size)           // 2
userRoles.clear()
console.log(userRoles.size)           // 0 (Entire map object has been deleted)

// You can iterate through map just like as object(methods discussed in object_methods.js and advancedLoops.js)