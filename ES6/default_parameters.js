// Default parameters in function
function multiply(a, b = 10) {
    return a * b;
}
  
console.log(multiply(5, 2));
// Expected output: 10
  
console.log(multiply(5));
// Expected output: 50