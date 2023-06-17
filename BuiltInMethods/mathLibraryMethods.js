// NOTE: All Math library methods return NaN for non-numeric string arguments
// Refer: NaN.js in Miscallaneous folder

// abs() method returns the absolute value of the specified number.

console.log("Absolute value",Math.abs(57));     
console.log("Absolute value",Math.abs("-43"));  
console.log("Absolute value",Math.abs(-3));  

// ceil() method rounds a number up to the next largest integer
console.log( "next largest integer,23.8",Math.ceil(23.8));
console.log( "next largest integer,-3.1",Math.ceil(-3.1));

// floor() function rounds down a number to the next smallest integer.
console.log( "next smallest integer,23.8",Math.floor(23.8));
console.log( "next smallest integer,-3.1",Math.floor(-3.1));

// max() method finds the maximum value among the specified values and returns it.
// Note: max() and min() function accepts a list of numbers as arguments and returns the maximum value among them. 
// However, if you pass an array directly to the Math.max() function, it will return NaN because it cannot process an array directly.

let numbers = [4, 1, 2, 55, 9];
let maxNum = Math.max(...numbers);
console.log("Maximum value in array",maxNum);

// min() method finds the minimum value among the specified values and returns it.
let minNum = Math.min(...numbers);
console.log("Minimum value in array",minNum);

// random() function returns a random floating-point number in range [0,1)
console.log(Math.random());

// sqrt() method computes the square root of a specified number and returns it.
console.log(Math.sqrt(144.64));  // 12.026637102698325
console.log(Math.sqrt(-324));    // NaN

// pow() method computes the power of a number by raising the second argument to the power of the first argument.
console.log(Math.pow(5,3));     // 125
console.log(Math.pow(0,3));     // 0
console.log(Math.pow(0,-3));    // Infinity
console.log(Math.pow(4.5,2.3))  // 31.7971929089206