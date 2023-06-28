// split() method is used to break a string into an array of substrings

console.log("85@@86@@53".split('@@'));                    //  ['85','86','53']
console.log("banana".split());                            //  ["banana"]
console.log("president,senate,house".split(',',2));       //  ["president", "senate"]
console.log("Java is awesome. Java is fun.".split("."))   //  [ 'Java is awesome', ' Java is fun', '' ]

// NOTE: Study join() in StringMethods
// join() method is used to combine the elements of an array into a string