// Default parameters in function
function say(message='Hi') {
    console.log(message);
}
  
say(); // 'Hi'
say('Hello') // 'Hello'

// default value of parameter is undefined
function say(message) {
    console.log(message);
}

say(); // undefined