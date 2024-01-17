// Methods discussed - Promise.all, Promise.allSettled, Promise.race, Promise.any

// Promise.all is used when you want to wait for all promises in an iterable (e.g., an array) to either fulfill or any one of the promise to get rejected. 
// It returns a single promise that is:
// fulfilled with an array of the fulfilled values (in the same order as the input promises)  
// or rejected with the reason of the first promise that gets rejected.

let count1 = 10;
let count2 = 20;

let promise1 = new Promise((resolve, reject) => {
  if (count1) {
    resolve(count1);
  } else {
    reject("There is no count value");
  }
});

let promise2 = new Promise((resolve, reject) => {
  if (count2) {
    resolve(count2);
  } else {
    reject("There is no count value");
  }
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log("Promise.all Fulfilled:", values);
  })
  .catch((reason) => {
    console.error("Promise.all Rejected:", reason);
  });

// Promise.allSettled waits for all promises to settle (fulfilled or rejected) 
// It returns a promise with an array of objects describing the outcome of each promise.

const promises = [
  Promise.reject('Error 1'),
  Promise.resolve('Result 2'),
  Promise.reject('Error 3')
];

Promise.allSettled(promises)
  .then(results => {
    console.log(results);
  });

// reults -> [{ status: 'rejected', reason: 'Error 1' },{ status: 'fulfilled', reason: 'Result 2' },{ status: 'rejected', reason: 'Error 3' }]

// Promise.race is used when you want to wait for the first promise in an iterable to either fulfill or reject. 
// It returns a promise that is settled(fulfilled or rejected) with the value or reason of the first settled promise.

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("Promise.race Winner:", value);
  })
  .catch((reason) => {
    console.error("Promise.race Loser:", reason);
  });

// Promise.any waits only for the first fulfilled promise and gets its result. 
// It returns a promise that is fulfilled with the value of the first fulfilled promise.
// If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.
  
Promise.any([promise1, promise2])
    .then((value) => {
      console.log("Promise.any Winner:", value);
    })
    .catch((reason) => {
      console.error("Promise.any Loser:", reason);
    });
