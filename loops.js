// while,do ...while,for (in notebook)
// for...of,for...in

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