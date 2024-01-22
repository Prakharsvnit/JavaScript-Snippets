## Types of Errors


### Operational Errors

Operational Errors are errors that occur while a program is working on a task, such as a network failure. Handling operational errors should be covered by applying an appropriate scenario strategy. For instance, in the case of a network error, a strategy would be to retry the network operation.

Operational errors include:

- Failed to connect to the server
- Failed to resolve hostname
- Invalid user input
- Request timeout
- Server returned a 500 response
- System is out of memory
- Etc.

### Developer Errors

Developer Errors are mistakes made by developers, such as providing invalid input. In these cases, the application should not attempt to continue running and should crash with a helpful description so that the developer can fix the issue.

Developer errors include:

- Tried to read a property of undefined
- Called an asynchronous function without a callback
- Passed a string where an object was expected
- Passed an object where a property is missing but required
- Etc.

## Error handling mechanisms

Your summary is mostly accurate, but let me provide a slight adjustment for the synchronous scenarios:

### Synchronous Scenarios:

There are three common ways to handle errors in synchronous scenarios(combination also possible):

- **Logging:**
  - **Explanation:** Logging involves recording error details for later analysis. This can include logging to the console, a file, a monitoring system, or any other appropriate logging mechanism.
  - **Use Case:** Useful for capturing information about errors without necessarily stopping the application.

- **Abort/Crash:**
  - **Explanation:** Aborting or crashing the application means terminating its execution upon encountering an error. This is a decisive action to prevent the application from continuing in an uncertain state.
  - **Use Case:** Suitable when the error is critical and the application cannot safely proceed.

- **Retry/Restart:**
  - **Explanation:** Retry or restart strategies involve attempting the same operation again after an error occurs. It's a way to recover from transient errors or issues that might be temporary.
  - **Use Case:** Appropriate for scenarios where a temporary failure might be resolved by reattempting the operation.


### Asynchronous Scenarios:

There are three common ways to handle errors in asynchronous scenarios(combination also possible):

- **Rejection:**
  - **Explanation:** Handling errors by allowing promises to be rejected in JavaScript. If an error occurs during the execution of an asynchronous task, the promise is rejected.`new Promise(resolve,reject)`
  - **Use Case:** Suitable when dealing with asynchronous operations that return promises, and you want to handle errors using promise rejection.

- **Try/Catch:**
  - **Explanation:** Using the traditional `try/catch` mechanism in JavaScript to handle errors within a specific asynchronous function or block of code.
  - **Use Case:** Useful when you want to handle errors within the asynchronous code itself.

- **Propagation:**
  - **Explanation:** Letting errors propagate up the call stack, allowing higher-level functions or the main application logic to handle the errors.
  - **Use Case:** Suitable when you want errors to be handled at a higher level in the application or when you want to centralize error-handling logic. `throw error`

## Uncaught Exceptions

**In Node.js, uncaught exceptions are exceptions that are thrown either from synchronous or asynchronous code that are not caught by any try/catch block.**

If an uncaught exception is not handled, it will cause the Node.js process to crash. Therefore, it's important to handle these exceptions.

Here's an example of how to handle uncaught exceptions in Node.js:

```javascript
process.on('uncaughtException', function (err) {
  console.error('An uncaughtException was found, the program will end.');
  //hopefully you have logging in place here:
  console.error(err.stack);
  process.exit(1);
});
```

In this example, we're listening for the 'uncaughtException' event on the process object. When an uncaught exception occurs, this event is emitted. We then log the error and end the process.

Also, after an 'uncaughtException' event is emitted, your application is in an undefined state. It's generally recommended to restart the process after an uncaught exception. In production environments, a process manager like *PM2, forever, or nodemon* can be used to manage this.

---
**Stack trace**
A Stack trace is displayed automatically by the JVM to indicate that an error has occurred during the program execution.The stack trace is useful while debugging code as it shows the exact point that has caused an error. 

```javascript
try { 
	throw new Error("Error occurred"); 
} 
catch(e) { 
	console.log(e); 
} 
```
```javascript
try {
    // code that may throw an error
} catch (error) {
    console.error(error.stack);
}
```
*An error can be created with using the constructor new Error('error message') and thrown using the throw keyword.Always throw Error object instead of value to keep stack trace.*

```javascript
console.trace(new Error("My Error"));
```

### Common JavaScript Errors
JavaScript Error Types and Examples
1. **RangeError**:
- Thrown when a number is outside an allowable range of values.
- Example: When trying to grow an array to contain a number of elements that exceeds the allowable range.

2. **ReferenceError**:
- Thrown when a reference made to a variable/item is broken, meaning the variable/item doesn’t exist.
- Example: Referring to a variable that has not been defined in the environment record.

3. **SyntaxError**:
- The most common error occurring when the code does not conform to the syntax rules of JavaScript.
- Example: When an unexpected identifier breaks the code during parsing/compile time.

4. **TypeError**:
- Indicates an unsuccessful operation when an operation is performed on the wrong data type.
- Example: Trying to perform an operation like toUpperCase() on a data type that does not support it.

5. **URIError**:
- Indicates that one of the global URI handling functions was used in a way that is incompatible with its definition.
- Example: Incorrect usage of functions like decodeURI, decodeURIComponent.

6. **EvalError**:
- Identifies errors when using the global eval() function, although **_not currently used within the EcmaSpec 2018 edition_**.

7. **InternalError**:
- Occurs internally in the JS engine, especially when it has too much data to handle and the stack grows way over its critical limit.
- Example: Too much recursion or overwhelming the JS engine with too many switch cases.



### External tools/methods for error handling

- Use testing frameworks such as **Jest**,**Mocha**
- Use loggers such as **winston**,**pino**
- Use APM(Application Performance Monitoring) products like **Datadog**,**Splunk**,**New Relic**
- Use validation libraries like **Joi**,**Validator**,**yup**,**zod**

[Reference](https://github.com/Prakharsvnit/nodebestpractices?tab=readme-ov-file#2-error-handling-practices)

[Blog1](https://www.honeybadger.io/blog/errors-nodejs/)

## Important note:
> Always document the recovery procedures for troubleshooting and handling errors. 

For handling errors in event emitters, refer [here](https://github.com/Prakharsvnit/nodebestpractices?tab=readme-ov-file#-213-subscribe-to-event-emitters-and-streams-error-event), error handling is different in case of events and streams as try-catch clause won't get errors that originate from Event Emitters