**Primitive values** include `number`, `string`, `boolean`, `undefined`, `null`, and `symbol`
**Reference values** include `object`, `array`, and `function`

### Differences
1. ***Storage***
| *Primitive* | *Reference* |
| ----------- | ----------- |
| They are stored directly in memory and are accessed by value | They are stored as a memory address or reference to the actual value  |


2. ***Copy***
| *Primitive* | *Reference* |
| ----------- | ----------- |
| When you assign a primitive value to a variable or pass it as an argument to a function, a new copy of the value is created | When you assign a reference value to a variable or pass it as an argument to a function, a reference to the object is stored, rather than the actual value |
| Any changes made to one variable do not affect other variables holding the same value | Multiple variables can reference the same object, and any changes made to the object through one variable will be reflected in all other variables referring to the same object. |

### Example
```javascript
// Primitive value assignment
let num1 = 10;
let num2 = num1; // num2 gets the value of num1
num1 = 20; // Changing num1 does not affect num2

console.log(num1); // Output: 20
console.log(num2); // Output: 10

// Reference value assignment
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 references the same object as obj1
obj1.name = "Alice"; // Changing obj1's property also changes obj2

console.log(obj1.name); // Output: Alice
console.log(obj2.name); // Output: Alice
```