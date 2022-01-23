//? Sets
// Kind of like arrays, but don't allow duplicates (kinda like sets in C++ lol, but not really)
//! This is only a 'surface-level' difference.

const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];  // Duplicate values allowed

//TODO: When creating a set, we have to use the 'constructor' and the 'new' keyword.
// No shortcuts here :P
const first_set = new Set(['val1' , 'val2' , 'val3']);

const namesSet = new Set(namesArray);   // Eliminates all the duplicated values in the array
console.log(namesArray);
console.log(namesSet);

//TODO: What if we want to store the 'unique-elements' array inside an array, not a set
const uniqueNames = [...namesSet];  // We use the Spread operator B)
console.log(uniqueNames);
//* Shortcut :-
console.log( [...new Set(namesArray)] );


const ages = new Set() ;

ages.add(20);
ages.add(25).add(30);   // We can chain the add functions
ages.add(25) ;  // Disregards repeated value
console.log(ages);

ages.delete(20);    // We CAN't chain the delete function
console.log(ages);

console.log(ages.size);   // To find the no. of elements //! This is a Property, not a function

console.log(ages.has(20));
console.log(ages.has(25));

ages.clear() ;      // Removes all the values in the set
console.log(ages);

//* Sets are iterable

const ninjas = new Set( [
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 20},
    {name: 'chun-li', age: 40}
] );

ninjas.forEach( ninja => console.log(ninja.age * 2) );