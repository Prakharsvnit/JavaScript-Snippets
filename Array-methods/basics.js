let colors = ['red', 'green', 'blue'];

console.log(colors.length); // 3

// join method to convert array of substrings to a string
// split method to convert string into array of substrings

console.log(colors.join("-"));                     //red-green-blue

colors[5] = 'orange';
console.log(colors[4],colors[5],colors.length);   //undefined,orange,6


// concat() method merges arrays and returns a new array without changing original arrays.

let rgb = ['red','green','blue'];
let moreColors = rgb.concat('yellow','magento');
console.log(moreColors);                          

// flat() method creates new array without changing original array,
// with all the elements of the subarrays concatenated to it recursively.

const numbers = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers = numbers.flat(2);
const flatNumbersDefault = numbers.flat();     //default depth is 1,if depth is unknown ->take it as Infinity.

console.log(flatNumbers);
console.log(flatNumbersDefault);

