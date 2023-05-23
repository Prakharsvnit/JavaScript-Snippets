// remove elements in array : pop(),shift()

// pop() method removes the last element from an array and returns the removed element
const numbers = [10, 20, 30];
const last = numbers.pop();

console.log(last);                      // 30
console.log(numbers);                   // [10,20]

// shift() method removes the first element from an array and returns that element.
const numbers_list = [10, 20, 30];
let number = numbers_list.shift();

console.log( number);                  // 10
console.log( numbers_list );           // [20,30]
