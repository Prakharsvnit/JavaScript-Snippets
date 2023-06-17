// filter() method returns a new array with all elements that pass the test defined by the given function.

/*
arr.filter(callback(element), thisArg)

The filter() method takes in:
callback - The test function to execute on each array element returns true; 
if element passes the test, else false. It takes in current element being passed from the array 
thisArg (optional) - By default, it is undefined.
*/

// Example 1
const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
console.log(newPrices);               // [ 3000, 5000, 8000 ]

// Example 2
const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];
const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);
let newLanguages = searchArr(languages, "p");
console.log(newLanguages);             // [ 'JavaScript', 'Python', 'PHP' ]