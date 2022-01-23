//? Rest Parameter
// 'Rest' allows us to bundle up arguments inside a function, into a single array parameter

const double = (...nums) => {
    //* The ... (rest parameter) takes in all the arguments that we put into the function, when we
    //* call it, and it bundles them up into a single array parameter
    
    console.log(nums) ;
    return nums.map(num => num*2 );
}

const result = double(1,3,5,7,9,2,4,6,8);   // All arguments turn into a single array
console.log(result);

console.log('\n');


//? Spread Syntax
// We still use the '3 dots' (...), but we use the 'spread syntax' to spread out an array into its
// individual components

const people = ['shaun', 'ryu', 'crystal'];
console.log(...people); // Instead of an array, we'll see 3 individual components

const members = ['mario', 'chun-li' , ...people];
    // This spreads the 'people', into individual elements of the new 'members' array
console.log(members);

console.log('\n');


//? Spread Syntax (objects)
const person = {
    name: 'shaun', age: 30, job: 'net ninja'
};
const notactuallypersonClone = person ;
    //! The above line DOES NOT create a new object, as objects are a reference type.
    //TODO: All it does is create a new pointer, which is pointing to the same object

const personClone = {...person};
    //* In this case, we're actually making a full copy

const newPerson = {...person, location: 'manchester'};  // We added a new property to this person

console.log(notactuallypersonClone);
console.log(personClone);
console.log(newPerson);