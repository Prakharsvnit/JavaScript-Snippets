/*
Optional chaining allows you to access deeply nested properties or function in an object 
without having to check for the existence of each of them. 
If any reference along the chain is null or undefined, the expression short-circuits and returns undefined.

This operator is especially useful when dealing with nested data structures or 
APIs where a certain property may not always exist

Cons: Over-usage may hide structural errors and lead to difficulty in debugging. 
It's also part of ES2020,which may cause browser compatibility issues.
*/

const user = {
    personalDetails: {
      name: 'John Doe',
      address: {
        street: '123 Main St',
        city: 'Anytown'
      }
    }
  };

let userCountry = user.personalDetails?.address?.country;    
console.log(userCountry);         // outputs undefined instead of throwing a TypeError

/*
NOTE: As there are two ?. operators in single line, 
knowing exactly which part of the optional chaining short-circuits can be tricky.

Solution: Break down your statement into multiple parts and log intermediate values, 
checking where your objects properties are undefined.(It is a debugging process)

BONUS: You can combine nullish coalescing operator with optional chaining operator to
assign a default value to country.
*/

const defaultCountry = "Default Country";
userCountry = user.personalDetails?.address?.country ?? defaultCountry;  

console.log(userCountry);