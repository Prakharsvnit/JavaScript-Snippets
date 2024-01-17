// Callback is a function that you pass into another function as an argument for executing later.

function fetchData(callback) {
    setTimeout(function () {
      const data = { name: 'John', age: 25 };
      callback(data);
  },1000); 
}

function displayData(data) {
    console.log('Name:', data.name);
    console.log('Age:', data.age);
}
  
fetchData(displayData);
  
// The displayData serves as the callback. 
// When calling fetchData(displayData), the displayData function is passed as a callback to the fetchData function. 
// This means that when the data is fetched, the displayData function will be called with the fetched data.