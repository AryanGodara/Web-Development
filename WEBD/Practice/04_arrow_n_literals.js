//? Arrow Functions
/* 
 * These expressions lexically bind the 'this' value while using less syntax that a typical 
 * function expression. Arrow functions are always //! 'anonymous'. (Not bound to an identifier).
 * Examples of arrow functions :-
 * (paramter) => {statements}
 * parameter => {statements}
 * parameter => expression
 * parameter => {return expression}
 * (param1, param2, ..., paramN) => {statements}
 * (param1, param2, ..., paramN) => expression
 * (param1, param2, ..., paramN) => {return expression}
*/

const makeArray1 = (...values) => { return values; };
console.log('Array:', makeArray1(1,2,3,4));
console.log('Array:', makeArray1(1,2,3,4,5,6));

const getSum = (a,b) => { return a + b; };
console.log('1+2 = ', getSum(1,2));
console.log('1+2 = ', getSum(4,2));

const greeting = 'Hello, world.';
const capitalize = myString => { return myString.toUpperCase() };
console.log( greeting, '=>', capitalize(greeting) );
console.log( greeting, '=>', capitalize('Heyy') );


//? Sum of all elements in an array, using a normal function, then using an arrow function :-
const array1 = [1,2,3,4,5];

const sum1 = array1.reduce( function(a,b) {             //* Normal Function
    return a + b ;
}, 0 );

const sum2 = array1.reduce( (a,b) => { return a+b ;}, 0 );  //* Arrow Function

const sum3 = array1.reduce( (a,b) => a+b, 0 );      //* Arrow function, without 'return' keyword

console.log('Array:', array1 );
console.log('Sum1:', sum1 );
console.log('Sum2:', sum2 );
console.log('Sum3:', sum3 );


//? Finding the length of strings in an array

const arr = [ 'first', 'second', 'third', 'fourth', 'fifth' ];

const len1 = arr.map( function(s) { return s.length } );
const len2 = arr.map( s => s.length );

console.log("Array:", arr);
console.log('Lenghts1:', len1);
console.log('Lenghts2:', len2);


//? Find Array elements greater than a value

const greaterThan3_1 = array1.filter( function(a) {
    return a > 3
} );

const greaterThan3_2 = array1.filter( a => a>3 );

console.log("Array:", array1);
console.log('Elements greater than 3 (1)', greaterThan3_1)
console.log('Elements greater than 3 (2)', greaterThan3_2)


//? String Literals :-

// Print a Multi-Line String using Template Literals :-
console.log(`First line
Second Line
    This line with Tab in front`)

// Print a Line using Template Literals
const a = 2 , b = 3 ;

console.log(`The sum of a and b is ${a+b}
The product of a and b is ${a*b}`);


//? Tagged Template Literals
/*
 * Tagged template literals allow us to use a function to modify the output of a template literal.
 * In this construct :-
 * 1. The first argument contains an array of string literals.
 * 2. The subsequently processed arguments are the vaules of the substitution string.
 * 
 * After processing all the elements, the function returns the manipulated string.
 */

//TODO: Example:-

var a1 = 5 , b1 = 10 ;

function random_func_name( strings, ...values ) {
    console.log("." + strings[0] + '.' );       // Equal to 'sum'
    console.log('.' + strings[1] + '.');        // Equal to 'product'
    console.log('.' + strings[2] + '.');        // Equal to 'division'
    console.log('.' + strings[3] + '.');        // Equal to '.'
    console.log(values[0]);             // Value of a+b
    console.log(values[1]);             // Value of a*b
    console.log(values[2]);             // Value of b/a
}

random_func_name `Sum ${a1+b1}
Product ${a1*b1}
Division ${b1/a1}.`;

/*
 * Now, we can see that, the total number of string literals is one more than the number of total
 * cooked expressons. The first string literal is the string before the first cooked expression,
 * the last string literal is the string after the last cooked expression and other literals are
 * in between the cooked expressions.
 * 
 * We can also return from tagged templates :-
*/

var a2 = 5 , b2 = 10 ;

function foo (strings, ...values) {
    let a2 = values[0] , b2 = values[1];

    return `Sum ${a2+b2}
Product ${a2*b2}
Division ${b2/a2}`;
}

console.log( foo `Num1 ${a2+10}
Num2 ${b2*2}
Num3 ${b2/a2}` );