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

// Caution: If the input array is empty, conditions don't matter
// In case of every(),result will always be true