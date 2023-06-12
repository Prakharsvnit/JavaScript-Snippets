//let,const,var - ways of declaring vriables in JS

var bruce_wayne;          //variable declaration
bruce_wayne = "batman"    //variable initialization
console.log("Bruce Wayne",bruce_wayne)

/*
This means we can declare variables at topmost
part of our code and declare it where it's required
in any part of code for clean code
*/

//OR
var bruce_wayne = "batman"

//value of variable can be changed
var name = "Prakhar"
name = "Peter"
console.log(name)


/*
If variable is declared,but not initialized and asked
to return value,it gives undefined
*/
var declared;
console.log("declared",declared)

/*
If variable is not declared and asked to return value
ReferenceError: unknown_variable not defined
*/
console.log(unknown_variable) 

/* 
If you comment line 33,then only rest of the code 
below line 33 will be executed (Wierd!)
*/

//let is almost same as var,but has different scope.
let clark_kent;
clark_kent = "Superman"
console.log("Clark Kent",clark_kent)

//value of const variable cannot be changed
const ironman = "Robert Downey Jr."
console.log(ironman)


/*
Naming rules for identifiers:
1. can't contain spaces.
2. can't contain reserved words like new,function,let,var,const,throw,catch,void,etc.
3. can't have first character as $,_
4. can have alphanumeric,special characters
*/