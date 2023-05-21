const text = "Hello, world!";

console.log(text.indexOf("world")); //  7
console.log(text.includes("Hello")); //  true
console.log(text.startsWith("Hello")); //  true
console.log(text.endsWith("!")); //  true


/*
- indexOf method returns -1  if substring isn't present in string.
- All the methods are case-sensitive.
*/