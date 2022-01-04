console.log("using double quotes", 'using single quotes')

let email = 'aryangodara03@gmail.com'
console.log(email)
email += ' <-:my email id'
console.log(email)
for ( let i = 0 ; i < email.length ; i++ )
    console.log(email[i])
console.log(email.indexOf('@'))
console.log(email.replace('a','*'))
let num = 10 ;
console.log(email+num)

// template strings
const title = 'Best reads of 2019' ;
const author = 'Mario' ;
const likes = 30 ;

// concatenation way
let result1 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.' ;
console.log(result1) ;

// template string way
let result2 = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result2) ;

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span>
`;
console.log(html) ;

// Arrays :-
let ninjas = ['shaun', 'ryu', 'chun-li',,'lastone',24] ;    // We can store any data types
console.log(ninjas);
for ( let i = 0 ; i < ninjas.length ; i++ )
    console.log(ninjas[i]) ;
console.log(ninjas.join('.,.'));    // Join all the elements of the array into a single string, separated by '.,.'
console.log(ninjas.indexOf(24));
console.log(ninjas.indexOf('last'));    // Returns '-1' as this element does not exist
console.log(ninjas.indexOf(23));    // Returns '-1' as this element does not exist

let result = ninjas.push('newlast');    // result stores the new 'length' of the 'ninjas array', not an array, or an element of an array
console.log(result);
console.log(ninjas);    // This has been updated now, the change in the line above was permanent.
result = ninjas.pop();
console.log(ninjas);

// Null : Explicitly set a variable with no value.
// Undefined: For variables that have not yet been defined.
// Object: Complex data structures-> Arrays, Dates, Literals, etc.
// Symbol: Used with objects.

let age;
console.log(age,age+3,`the age is ${age}`);
// At this point age is 'undefined'
age = null;
console.log(age,age+3,`the age is ${age}`);
// Now, age is set to null.

// When we use a 'null variable' inside an arithmetic operation, it takes the value 0.
// And when we use a 'null variable' in a string, it takes the value 'null' (as a string).

console.log(age*3);         // OP : 0
console.log(3/age);         // OP : Infinity
console.log(age/3)          // OP : 0

// All outputs are as expected.

// * Strict and Loose Comparisons
age = 25 ;
console.log('\n');
// Loose Comparison (different types can still be equal)
console.log(age == 25);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');
console.log('\n');
// Strict Comparison (different types can't be equal)   (Just add an extra '=' lol)
console.log(age===25);
console.log(age==='25');
console.log(age!==25);
console.log(age!==25);
console.log('\n');

//!  Type Conversion

let score = '100' ;

console.log(score+1) ;  // Outputs a concatenated string

score = Number(score);
console.log(score+1) ;  // Outputs an integer now

score = '100' ; // Converting score back to a string
console.log(Number(score)+2);
console.log(score+1) ;    // Score remains unchanged (still a string)

// But, what if we try to convert a 'alphanumeric string' to a number?

result = Number('Hello');   // A variable called 'result' was already declared earlier
console.log(result);        // OP : NaN (Not a Number)