/*
setTimeout is asynchronous method
which executes a function after specified time,
only ONCE.
*/

const greet = () => {
  console.log("I will appear second");
}

console.log("this will appear first")
setTimeout(greet,3000);

/* setTimeout function returns timerId
which is given as arguement to clearTimeout.
*/

let timerId = setTimeout(greet,6000);

clearTimeout(timerId)
console.log("timer is stopped")

/*
You generally use the clearTimeout() 
method when you need to cancel the 
setTimeout() method call before it happens.
*/