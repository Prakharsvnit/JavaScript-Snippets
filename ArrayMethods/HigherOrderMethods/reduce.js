// reduce() method iterates over array and returns a single output value
// It DOESN'T CHANGES ORIGINAL ARRAY

/* 
arr.reduce(callback(accumulator, currentValue), initialValue)
It takes two arguements: callback function, initialValue(optional).
Callback function takes two parameters: an accumulator and current element of the array.
*/

// Example 1
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
);

console.log(sum); // 15

// Example 2
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;
const savings = expenses.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  salary
);

console.log(savings); // 2700

// NOTE: Calling reduce() on an empty array without initialValue will throw TypeError
