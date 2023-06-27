// Coalescing refers to the process of merging or combining two or more things into a single entity.

/*
const result = value1 ?? value2;

Nullish coalescing operator returns value2 
if value1 is null or undefined else value1
The logic transfers to:

const result = value1;
if(result === null || result === undefined) {
   result = value2;
}
*/

console.log(null ?? 'test');        //  'test'
console.log(undefined ?? 56);        //  56
console.log(null ?? 0);              //  0
console.log(45 ?? 25);               //  45

let result1 = 1 ?? console.log('Hi');
console.log(result1);               // 1

// REMARK: I think it's the best way to check for null and undefined values