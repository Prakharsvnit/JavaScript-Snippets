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

//let is almost same as var,but has different scope.
let clark_kent;
clark_kent = "Superman"
console.log("Clark Kent",clark_kent)

//value of const variable cannot be changed
const ironamn = "Robert Downey Jr."