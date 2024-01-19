// Call: The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite1(greeting1, greeting2) {
  console.log('invite1' +
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite1.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite1.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
var employee1 = { firstName: "Jane", lastName: "Rodson" };
var employee2 = { firstName: "Jim", lastName: "Baily" };

function invite2(greeting1, greeting2) {
  console.log('invite2' +
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite2.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite2.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

// Bind: returns a new function, allowing you to pass any number of arguments
var employee1 = { firstName: "Johnny", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy Anderson", lastName: "Baily" };

function invite3(greeting1, greeting2) {
  console.log('invite3' + 
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite3.bind(employee1);
var inviteEmployee2 = invite3.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// In JavaScript, functions are allowed to be redefined or overwritten. 
// JavaScript does not throw an error for function redefinitions; instead, 
// it allows you to override functions with the latest definition.