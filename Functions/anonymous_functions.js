//Anon. functions
let show = function(a,b){
    return a * b;
}

console.log(show(2,3));

// IIFE(Immediately invoked function execution)
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);


//Arrow functions in ES6
let display = () => console.log('Anonymous function');
let add = (a, b) => a + b;   
