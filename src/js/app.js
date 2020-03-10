import canIterate from './canIterate';

console.log(`new Map() - ${canIterate(new Map())}`); // true
console.log(`new Set() - ${canIterate(new Set())}`); // true
console.log(`String - ${canIterate('Netology')}`); // true
console.log(`Number - ${canIterate(10)}`); // false
console.log(`Null - ${canIterate(null)}`); // false
