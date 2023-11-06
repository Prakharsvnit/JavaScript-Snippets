// swapping values of variables using temporary variable

let a = 3,b = 2;

let c = a;
a = b;
b = c;

console.log(a);       // 2
console.log(b);       // 3

// swapping values of variables without using temporary variable,using destructuring

let x = 10,y = 20;

[x, y] = [y, x];

console.log(x); // 20
console.log(y); // 10

// swapping values of variables without using temporary variable

let a = 4,b = 7;
a = a + b;       // 11
b = a - b;       // 4
a = a - b;       // 7
