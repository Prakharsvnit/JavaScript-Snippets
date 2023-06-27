// parseFloat() parses a string and convert it into a floating-point number.
// It extracts the numeric value from the beginning of the string until it encounters a non-numeric character.

console.log(parseFloat("  10  ")); // 10
console.log(parseFloat("  3.14seconds")); // 3.14
console.log(parseFloat("JavaScript")); // NaN
