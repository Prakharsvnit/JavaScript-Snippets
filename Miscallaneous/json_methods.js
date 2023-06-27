// JSON stands for Javascript Object Notation.In JSON, the data are in key/value pairs separated by a comma.
// JavaScript Objects and JSON are not the same (The key in key/value pair SHOULD BE IN DOUBLE QUOTES)

// JSON.stringify() method convert JavaScript objects to JSON format
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
let json = JSON.stringify(student);
console.log(json);

// JSON.parse() method converts JSON data to a JavaScript object
let obj = JSON.parse(json);
console.log(obj);

// NOTE: converting JSON to a JavaScript object is necessary to access and manipulate data in JavaScript 
// code, while converting a JavaScript object to JSON is required when sending data across the network.  