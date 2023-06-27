// parseInt() function is used to parse a string and convert it into an integer.
// It takes two arguments: the string to be parsed and an optional radix (base) value.
// radix parameter represents the base of the numeric system to be used for parsing.
// default value of radix is 10, which means it interprets the string as a decimal number.
// Syntax: parseInt(string, radix);

// Example:
console.log(parseInt("42")); // Output: 42
console.log(parseInt("10.545")); // Output: 10
console.log(parseInt(10.545)); // Output: 10

console.log(parseInt("1010", 2)); // Output: 10 (binary representation)
console.log(parseInt("FF", 16)); // Output: 255 (hexadecimal representation)
console.log(parseInt("11", 8)); // Output: 9 (octal representation)

console.log(parseInt("FF")); // Output: NaN
