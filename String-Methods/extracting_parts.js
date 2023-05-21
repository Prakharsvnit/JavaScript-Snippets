/*
.split() method takes in separator(comma,underscore,full-stop,hyphen,whitespace) 
as parameter and outputs the input string as array of strings with separator removed. 
*/

const fruits = "apple,banana,orange";
const fruitArray = fruits.split("-");  // can be separated using split
console.log(fruitArray); // Output: ["apple", "banana", "orange"]

/*
.substring() and .slice() method take startIndex and endIndex as parameters
and output the substring between those indexes.
NOTE : output string has this range of index -> [startIndex,endIndex)
*/

const str = "Hello, world";
console.log(str.slice(7,12));
console.log(str.substring(7,12));
console.log(str.slice(7))
console.log(str.substring(7))

// Same output for above -> world 

console.log(str.slice())
console.log(str.substring())

// Same output for above -> Hello, world

/*
Differences between .slice() and .substring() :
- If endIndex is written first,output remains same in .substring() but in case of .slice method,output is empty string.
- If the startIndex is negative, the slice() method starts extraction from the str.length + start
- If the endIndex is negative, the slice() method treats it as str.length + end
*/

console.log(str.length)              //12

console.log(str.substring(12,7));   //world
console.log(str.slice(12,7))        //"" (Empty string)
console.log(str.slice(-5));         //world                    
console.log(str.slice(0,-7))        //Hello
