/* 
.trim method to remove whitespace characters from both ends of a string
to remove whitespace characters from the beginning or from the end of a string only,
use the trimStart() or trimEnd() method.
*/

let str = '  JS trim  ';
let result = str.trim();

console.log(result);            //'JS trim'

/* 
replace() method takes two parameters -> substring to be replaced in original string
and new substring that is going to replace the substring given as first parameter
Example -> let newString = str.replace(substring, newSubstring);
and it returns a new string that replaces the FIRST-MATCHED substring.
To replace all occurences of that substring,use replaceAll() method.
*/

let text = 'JS will, JS will rock you!';
let newStr = text.replace('JS','JavaScript');
let newString = text.replaceAll('JS','JavaScript');

console.log(newStr);
console.log(newString);

// To concatenate strings,use .concat() but + or += operator is recommended.
let greeting = 'Hi';
let message = greeting.concat(' ', 'John');
let msg = 'Hi' + ' ' + 'John'

console.log(message);
console.log(msg);

// Output of both will be 'Hi John'