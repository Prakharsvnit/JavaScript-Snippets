The value of `this` depends on in which context it appears: `function`, `class`, or `global`.

[Refer MDN docs for this keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

- Global scope
- Function
    - Constructor
    - Arrow function
    - Callback
    - Inside another function
- Class

## 1\. this Inside Global Scope

When `this` is used alone, `this` refers to the global object (`window` object in browsers). For example,
```javascript
let a = this;
console.log(a);  // Window {}

this.name = 'Sarah';
console.log(window.name); // Sarah
```
---
## 2\. this Inside Function

When `this` is used in a function, `this` refers to the global object (`window` object in browsers). For example,

```javascript
function greet() {

    // this inside function
    // this refers to the global object
    console.log(this);
}

greet(); // Window {}
```
## 2.1 this inside Arrow Function

Inside the arrow function, `this` refers to the parent scope. For example,

```javascript
const greet = () => {
    console.log(this);
}
greet(); // Window {...}
```

[Arrow functions](https://www.programiz.com/javascript/arrow-function) do not have their own `this`. When you use `this` inside an arrow function, `this` refers to its parent scope object. For example,

```javascript
const greet = {
    name: 'Jack',

    // method
    sayHi () {
        let hi = () => console.log(this.name);
        hi();
    }
}

greet.sayHi(); // Jack
```


Here, `this.name` inside the `hi()` function refers to the `greet` object.

You can also use the arrow function to solve the issue of having `undefined` when using a function inside a method (as seen in Example 5). For example,

```javascript
const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.age);

        // inner function
        let innerFunc = () => {
        
            // this refers to the global object
            console.log(this);
            console.log(this.age);
            
        }

        innerFunc();

    }
}

person.greet();
```


**Output**

```
{name: "Jack", age: 25, greet: ƒ}
25
{name: "Jack", age: 25, greet: ƒ}
25
```

Here, `innerFunc()` is defined using the arrow function. It takes `this` from its parent scope. Hence, `this.age` gives **25**.

When the arrow function is used with `this`, it refers to the outer scope.

___

## 2.2 this Inside Constructor Function

In JavaScript, [constructor functions](https://www.programiz.com/javascript/constructor-function) are used to create objects. When a function is used as a constructor function, `this` refers to the object inside which it is used. For example,

```javascript
function Person() {

    this.name = 'Jack';
    console.log(this);

}

let person1 = new Person();
console.log(person1.name);
```

**Output**

```
Person {name: "Jack"}
Jack
```

Here, `this` refers to the person1 object. That's why, `person1.name` gives us Jack.

**Note**: When `this` is used with [ES6 classes](https://www.programiz.com/javascript/classes), it refers to the object inside which it is used (similar to constructor functions).

___


## 2.3 this Inside Inner Function

When you access `this` inside an inner function (inside a method), `this` refers to the global object. For example,

```javascript
const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);        // {name: "Jack", age ...}
        console.log(this.age);  // 25

        // inner function
        function innerFunc() {
        
            // this refers to the global object
            console.log(this);       // Window { ... }
            console.log(this.age);    // undefined
            
        }

        innerFunc();

    }
}

person.greet();
```

**Output**

```
{name: "Jack", age: 25, greet: ƒ}
25
Window { …}
undefined
```

Here, `this` inside `innerFunc()` refers to the **global object** because `innerFunc()` is inside a method.

However, `this.age` outside `innerFunc()` refers to the `person` object.

___

## 2.4 this Inside callback
In JavaScript, the value of `this` inside a function depends on how the function is called. When a function is used as a callback, the `this` keyword does not refer to the object that the function is a method of, but rather to the global object (in non-strict mode) or is undefined (in strict mode).

For example, consider the following code:

```javascript
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  printBrandAfterDelay() {
    setTimeout(function() {
      console.log(this.brand); // this will not refer to the Car instance
    }, 1000);
  }
}

let myCar = new Car("Toyota");
myCar.printBrandAfterDelay(); // Outputs: undefined
```

In this example, `this.brand` inside the `setTimeout` callback function does not refer to the `Car` instance, but to the global object (or is undefined in strict mode). This is because the function passed to `setTimeout` is not called as a method of the `Car` instance, but as a standalone function.

To get around this, you can use an arrow function, which does not have its own `this` value. Instead, `this` inside an arrow function always refers to the value of `this` in the scope where the arrow function was defined.

Here's how you can rewrite the above code using an arrow function:

```javascript
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  printBrandAfterDelay() {
    setTimeout(() => {
      console.log(this.brand); // this now refers to the Car instance
    }, 1000);
  }
}

let myCar = new Car("Toyota");
myCar.printBrandAfterDelay(); // Outputs: Toyota
```

In this version of the code, `this.brand` inside the `setTimeout` callback function does refer to the `Car` instance, because the arrow function was defined in the scope of the `printBrandAfterDelay` method, where `this` refers to the `Car` instance.

## 3\. this Inside Class

```javascript
class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const myInstance = new MyClass("John");

myInstance.sayHello(); // Output: Hello, my name is John
```

When `sayHello()` is called on an instance of `MyClass` **`this`** inside the method refers to the instance itself. In this case, this.name refers to the name property of the specific instance.