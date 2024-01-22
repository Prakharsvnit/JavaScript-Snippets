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

**Uncaught Exceptions**


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

### External tools/methods for error handling

- Use testing frameworks such as **Jest**,**Mocha**
- Use loggers such as **winston**,**pino**
- Use APM(Application Performance Monitoring) products like **Datadog**,**Splunk**,**New Relic**
- Use validation libraries like **Joi**,**Validator**,**yup**,**zod**

[Reference](https://github.com/Prakharsvnit/nodebestpractices?tab=readme-ov-file#2-error-handling-practices)

## Important note:
> Always document the recovery procedures for troubleshooting and handling errors. 