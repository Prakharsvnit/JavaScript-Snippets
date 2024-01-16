// some() method checks if at least one element in the array passes a test.

const marks = [ 4, 5, 7, 9, 10, 3 ];

const lessThanFive = marks.some((e) => {
    return e < 5;
});

console.log("output from some()",lessThanFive);

// every() method checks If All Array Elements Pass a Test
// considering above example

const equalToEight = marks.every((e) => {
    return e == 8;
})

console.log("output from every()",equalToEight)

/* Caution: 
If the input array is empty, conditions don't matter
In case of every(),result will always be true, and in case of some() method,result will always be false.

Since there are no elements in the array, the callback function is never executed, and the .every() method considers 
the condition to be satisfied for all elements (as there are none), since there are no elements that violate the condition,so the output is always true

The some() method checks for the existence of at least one element that satisfies the given condition, and an empty array contains no elements.
the condition is never satisfied. The output will be false.
*/