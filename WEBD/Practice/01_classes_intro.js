//? In this section, we'' discuss some of ohte ways we can use functions to simulate the behaviour
//? of classes.


//TODO: Using Functions :-
// 1. Define a normal JavaScript function.
// 2. Create an object by using hte 'new' keyword.
// 3. Define properties and methods for a created object using the 'this'  keyword.

// Example:-

'use strict'

function Fruit1 (name){
    this.name = name;
    this.color = 'unknown';
    this.getInfo1 = getFruitInfo1;
}

function getFruitInfo1 () {
    return `This ${this.name} is ${this.color} in color.`;
}

let lime1 = new Fruit1('Mexican Lime')
console.log(lime1.getInfo1());

lime1.color = 'green';
console.log(lime1.getInfo1());


//* We can also define the 'getFruitInfo' function internally.

// function Fruit2 (name){
//     this.name = name;
//     this.color = 'unknown';
//     this.getInfo2 = function() {
//         return `This ${this.name} is ${this.color} in color.`;
//     }
// }

//! This constructor function was converted to a class definition.
class Fruit2 {
    constructor(name) {
        this.name = name;
        this.color = 'unknown';
        this.getInfo2 = function () {
            return `This ${this.name} is ${this.color} in color.`;
        };
    }
}

let lime2 = new Fruit2('Brazilian Lime')
console.log(lime2.getInfo2());

lime2.color = 'yellow';
console.log(lime2.getInfo2());


/*
    * The drawback o finternally defining the getInfo function is that it recreates the function
    * everytime we create new 'Fruit' object. FOrtunately, every function in JavaScript has something
    * called a prototype property, which is empty by default.
    ? We can think of function's prototype as an object blueprint or paradigm; when we add methods
    ? and properties ot the prototype, they're accessible to all instances of that function.
TODO: This is especially useful for 'inheritance'
*/

function Fruit3 (name){
    this.name = name;
    this.color = 'unknown';
    this.getInfo1 = getFruitInfo1;
}

Fruit3.prototype.getFruitInfo1 =  function() {
    return `This ${this.name} is ${this.color} in color.`;
}

let lime3 = new Fruit1('Cuban Lime')
console.log(lime3.getInfo1());

lime3.color = 'orange';
console.log(lime3.getInfo1());

console.log('\n');


//? Using Object literals
// We can use object literals to define an object's properties and functions by initializing a 
// variable with a comma-separated list of property-value enclosed in curly braces.

let lime4 = {
    type: 'Hatian Lime',
    color: 'brown',
    getInfo3: function () {
        return `This ${this.name} is ${this.color} in color.`;
    }
}

console.log(lime4.getInfo3());

lime1.color = 'yellow';
console.log(lime4.getInfo3());

console.log('\n\n');

//? Single Class using a Function :-

/*
    * A singleton class is a design pattern that restricts a class to a singlge instance. When we 
    * assign the value of 'new function {...} to a variable, the following happens :-
    ? 1. We define an anonymous constructor function.
    ? 2. We invoke the anonymous constructor function with the 'new' keyword.
*/

'use strict';

let lime5 = new function() {
    this.name = 'Mexican Lime';
    this.color = 'green';
    this.getInfo4 = function() {
        return `This ${this.name} is ${this.color} in color.`;
    };
}

console.log(lime5.getInfo4());

lime1.color = 'yellow';
console.log(lime5.getInfo4());