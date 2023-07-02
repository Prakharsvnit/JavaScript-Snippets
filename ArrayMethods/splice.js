// splice() method to remove element
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]

// splice() method to add elements at particular index  
let colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'purple');  // here,2 denotes index at which 'purple' is to be inserted,0 indicates to not delete any array elements 
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);  // ["red", "yellow", "pink", "green", "purple", "blue"]

// splice() method to replace element at particular index
let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(2, 1, 'Python'); // here,2 denotes index at which 'Python' will replace it's previous array element
console.log(languages); // [ 'C', 'C++', 'Python', 'JavaScript' ]
languages.splice(2,1,'C#','Swift','Go');
console.log(languages); // [ 'C', 'C++', 'C#', 'Swift', 'Go', 'JavaScript' ]