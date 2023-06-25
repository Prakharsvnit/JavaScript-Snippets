// forEach() method to exeucte a function on every element in an array.
// It is similar to map() method and it DOESN'T ALTER ORIGINAL ARRAY

let prices = [1800, 2000, 3000, 5000, 500, 8000];
prices.forEach((value, index) => console.log(index + ":" + value));
prices.forEach((ele) => ele + 10); // No Output because forEach() method doesn't alter original array,use map() method for this
