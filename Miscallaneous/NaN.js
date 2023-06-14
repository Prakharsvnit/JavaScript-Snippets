// NaN represents Not a Number "Concept"
// Any string that can't be parsed to number results into NaN

console.log(typeof NaN);      // number(Wierd!)
console.log(NaN == NaN);      // false(Wierd!)
console.log(NaN === NaN);     // false(Wierd!)

// To detect if a variable is NaN: use isNaN() method
console.log(isNaN("hello"));    // true
console.log(isNaN("1"))         // false
console.log(isNaN(null))        // false as Number(null) is 0
console.log(isNaN(""));         // false as Number('') is 0

// Operations resulting into NaN

// Any datatype when did any operation with undefined or NaN results into NaN
console.log(1*undefined);
console.log("string"*undefined);
console.log(null*undefined);
console.log(undefined*undefined);
console.log(false*undefined);

// Other ways that results to NaN
console.log("string"*null);
console.log(undefined+null);
console.log(1+NaN);
console.log(0/0);
console.log(Infinity/Infinity);
console.log(0*Infinity)
