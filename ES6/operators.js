// Logical Assignment Operators

/* 
Logical OR assignment operator (||=)
x ||= y is equivalent to x || (x == y) 
Here left operand is x and right operand is x == y
*/

// If both the operand evaluates to false,then result is right operand (wierd!)
let d = 0,e = null;
console.log(d ||= e)         // null

// If both the operand evaluates to true,then result is left operand (wierd!)
let y = 10,z = '10';
console.log(y ||= z);      // 10
console.log(typeof y);    // number(left operand)

// If either of the operand evaluates to true,then result is value of that operand
let a = 0,b = 30;
console.log(a ||= b);       // 30

// Logical AND assignment operator(&&=)