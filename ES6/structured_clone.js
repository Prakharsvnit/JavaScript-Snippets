// The global structuredClone() method creates a deep clone of a given value

const dude = {name:'jeff',weapons:{main:'sword',alt:'bat'}};
const bro = structuredClone(dude)

bro.weapons = {main:'chappal',alt:'danda'}

console.log(dude)    //{ name: 'jeff', weapons: { main: 'sword', alt: 'bat' } }
console.log(bro)     //{ name: 'jeff', weapons: { main: 'chappal', alt: 'danda' } }
