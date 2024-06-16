// Check for Falsy Values: !value
// Falsy values -> null,undefined,0,NaN,''

// Check data types: 

typeof user == 'object'
typeof isValidEmail == 'function'
typeof user.age == 'number'
Array.isArray(arr)

// check object is non-empty:

if (Object.keys(obj).length > 0) {
    console.log('obj is not empty');
}

// check array is non-empty:

if (arr.length > 0) {
    console.log('Array is non-empty');
} 

// check specific key exists in an object:

if ('name' in obj) {
    console.log('Key "name" exists in the object');
}

// Check specific key exists in nested object: 

if (obj.outer?.inner?.field) {
    console.log('Field "field" exists in the nested object');
}

