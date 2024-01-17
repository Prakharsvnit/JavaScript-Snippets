// If a callback is created inside another callback,and this goes on...,it creates callback hell
// To solve this problem, promises are used to handle asynchronous operations in better way
// Promise is an object that encapsulates the result of an asynchronous operation.

//  promise object has a state that can be one of the following:

// Pending
// Fulfilled with a value
// Rejected for a reason

// Creating a promise
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

// Consuming the promise
countValue
    .then((result) => {
        console.log("Promise fulfilled",result);
    }).catch((error) => {
        console.log("Promise rejected",error)
    }).finally(() => {
        console.log("finally block executed")
    })

// The then() method is a callback, to be executed when the promise is fulfilled, 
// and catch() method is a callback to be invoked when the promise is rejected.    
// The finally() method schedule a function to execute when the promise is settled, either fulfilled or rejected.
// It’s good practice to place the code that cleans up the resources in the finally() method.