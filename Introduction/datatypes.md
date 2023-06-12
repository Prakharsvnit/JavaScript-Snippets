#### Data Types

**Primitive**
1. `boolean`
2. `string`
3. `number`
4. `bigint` (It represents the whole numbers that are larger than 2^53 – 1) 
5. `null`
6. `undefined`
7. `symbol` (Symbol function creates a new unique value every time you call it)

**Complex** - `object`

***functions, for example, are objects***

| `null`      | `undefined` |
| ----------- | ----------- |
| It means absence of value in variable| It means variable has been decalred,but value isn't assigned to it|
| type of null variable is `object`   | type of undefined variable is `undefined`|

```javascript
let a;
console.log(a)          // undefined
console.log(typeof a)  // undefined
```

```javascript
let a = null;
console.log(a)          // null
console.log(typeof a)  // object 
```

**Interview Question**
| `undefined`      | ***not defined*** |
| ----------- | ----------- |
| `undefined` means you declared a variable,but didn't initialized a value to it | ***not defined*** means you neither declared the value nor initialized a value to it |

```javascript
let c;
console.log(c);    // undefined
console.log(typeof c);  // undefined
```

```javascript
console.log(typeof c);    // undefined
console.log(c);          // ReferenceError: c is not defined
```

***NaN***
`NaN` means Not a Number and `typeof(NaN)` is a `number`
```javascript
console.log('a'/2); // NaN
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
``` 