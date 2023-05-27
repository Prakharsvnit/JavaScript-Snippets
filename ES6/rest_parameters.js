// The spread operator (...) unpacks the elements of an iterable object.
// The rest parameter (...) packs the elements into an array.
// When the spread operator is used as a parameter, it is known as the rest parameter.
// The rest parameters must be at the end

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
    console.log( titles );                     // [ 'Consul', 'Imperator' ]
}
  
showName("Julius", "Caesar", "Consul", "Imperator");