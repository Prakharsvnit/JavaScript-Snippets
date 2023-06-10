// ES6 introduced for...of that iterates over an iterable object such as: 

// Arrays :

let scores = [80, 90, 70];
for (let score of scores) {
    score = score + 5;
    console.log(score);
}

// Strings :

let str = 'abc';
for (let c of str) {
    console.log(c);
}

// ES6 introduced for...in loop to iterate over the enumerable properties of an object
// Avoid using for...in loop to iterate over elements of an array

let personObj = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(const property in personObj) {
    console.log(property + ':' + personObj[property]);
}

// firstName:John
// lastName:Doe
// ssn:299-24-2351
