// for loop statement creates a loop with three OPTIONAL expressions
/*
for (initializer; condition; iterator) {
      statements         
}
*/

// Simple example
console.log("Simple loop exmaple output")
for (let i = 1; i < 5; i++) {
    console.log(i);
}
  
// without initializer
console.log("for loop without initializer output")
let j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}

// without condition
console.log("for loop without condition output")
for (let z = 1; ; z += 2) {
    console.log(z);
    if (z > 10) {
      break;
    }
  }
  

// without any expression
console.log("for loop without any expression output")
let k = 1;
for (;;) {
  if (k > 10) {
    break;
  }
  console.log(k);
  k += 2;
}

// without any loop body
console.log("without any loop body output")
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);