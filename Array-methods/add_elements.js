const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 2;

console.log(fruits); // ['Apple', 'Orange']



// add elements in array : push(),unshift()
// push() method method adds one or more elements to the end of an array and returns new array’s length.

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

for (const color of cmyk) {
  colors.push(color);
}

// or colors.push(...cmyk)

console.log(colors);        // ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'back']




// unshift() method adds one or more elements to the beginning of an array and returns new array’s length
let numbers = [30, 40];

const length = numbers.unshift(10, 20);

console.log( length );       // 4
console.log( numbers );      //[10,20,30,40]  
