// ES2017 introduced the async/await keywords that build on top of promises, allowing to write asynchronous code 
// that is more readable. Technically speaking, the async / await is syntactic sugar for promises.

// The async keyword allows you to define a function that handles asynchronous operations. The async function returns a promise.
// Inside an async function, you can use the await keyword before a promise. 
// The await keyword pauses the execution of the async function until the promise is fulfilled or rejected.

async function fetchData() {
    try {
      const data = await fetchDataPromise();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
}