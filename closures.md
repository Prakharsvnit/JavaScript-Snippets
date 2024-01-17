## Closures

Closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. 

To understand the closures, you need to know:
- Lexical scoping
- Nested functions

### Lexical scoping
In JavaScript, [scope](https://www.javascripttutorial.net/javascript-variable-scope/) refers to the context in which variables are declared and accessed. JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position within the source code. When a function is defined, it has access to variables from its own scope as well as any outer (enclosing) scopes.

For example:
```javascript
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();
 ```
According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. 
In this example:
The `greeting()` function creates a local variable named `message` and a function named `sayHi()`.

The `sayHi()` is the inner function that is available only within the body of the `greeting()` function.

The `sayHi()` function can access the variables of the outer function such as the `message` variable of the `greeting()` function.

Inside the `greeting()` function, we call the `sayHi()` function to display the message `Hi`.


Note that functions are the [first-class citizens in JavaScript](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/), [code snippet for first-class-functions](https://github.com/Prakharsvnit/JavaScript-Snippets/blob/master/Functions/first_class_functions.js) therefore, you can return a function from another function.

```javascript
// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value
```

The inner function `displayName` is defined within the scope of `greet`, and it has access to the `name` variable from its outer (enclosing) scope. This is the **_key aspect of closures—inner functions retaining access to variables from their outer scopes._**


**Creating a Closure:**
   The variable `g1` is assigned the result of calling the `greet` function (`const g1 = greet();`). At this point, `g1` becomes a closure because it now holds a reference to the `displayName` function along with the environment (specifically, the `name` variable) in which it was created.

   ```javascript
   const g1 = greet();
   ```

 **Usage of the Closure:**
   When `g1()` is invoked, it executes the `displayName` function. Even though the `displayName` function is executed outside of the scope of `greet`, it still has access to the `name` variable from its original scope due to the closure.

   ```javascript
   console.log(g1()); // Output: Hi John
   ```

In summary, the closure is formed by the `displayName` function retaining access to the `name` variable from its enclosing scope, even after the `greet` function has finished executing. This allows the closure (`g1`) to remember and access the value of `name` when it is later invoked.