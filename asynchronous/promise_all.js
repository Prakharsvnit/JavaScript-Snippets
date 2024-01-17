

// Promise.all is used when you want to wait for all promises in an iterable (e.g., an array) to either fulfill or reject. 
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


