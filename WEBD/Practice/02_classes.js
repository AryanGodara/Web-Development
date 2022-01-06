'Basics of Classes in Javascript'

/*
    ? JavaScript classes, introduced in ECMAScript 6, are essentially syntactic sugar over 
    ? JavaScript's existing prototype-based inheritance that don't actually introduce a new 
    ? object-oriented inheritance model. This syntax is a means of more simply and clearly 
    ? creating objects and deal with inheritance.
*/

//? We define classes in two ways :-

//? 1. Class Declarations :-
// One way to define a class is using a class declaration. To declare a class, we use the class
// keyword and follow it with the class's name.
//* We always right the class names in 'TitleCase'

class Polygon1 {
    constructor(height,width){
        this.height = height;
        this.weight = width;
    }
}

let p1 = new Polygon1(1,2);
console.log('Polygon p1:', p1);

/* 
 * An important difference between function declarations and class declarations is that function 
 * declarations are hoisted (i.e., can be referenced before they're declared) but class declarations
 * aren't. This means that we must first declare our class before attempting to acces (or refence) it.
 * If we fail to do so, our code throws a //!ReferenceError
*/

try{
    let p2 = new Polygon2(1,2);      //! Polygon2 hasn't ben defined yet
    console.log('Polygon p2:', p2);
}
catch (exception) {
    console.log('ErrorName: ' + exception.name + ' ; \nMessage:' + exception.message);
    console.log(exception);
}

console.log('\n');

class Polygon2 {
    constructor(height,width){
        this.height = height;
        this.weight = width;
    }
}
//* The code below, doesn't give the same error
let p3 = new Polygon2(1,2);
console.log('Polygon p3:', p3);

console.log('\n\n');

//? 2. Class Expressions:-
// Class expressions are another way to define a class, and they can be either 'named' or 'unnamed'.
// The name given to a named class expression is local to the class' body.

//TODO Example: Unnamed Class Expression

let Polygon3 = class {
    constructor(height,width){
        this.height = height;
        this.weight = width;
    }
};
console.log('Polygon 3:', Polygon3);

let p4 = new Polygon3(1,2);
console.log('p4:', p4);

//TODO Example: Named Class Expression

let Polygon4 = class Polygon4{
    constructor(height,width){
        this.height = height;
        this.weight = width;
    }
};
console.log('Polygon 4:', Polygon4);

let p5 = new Polygon4(1,2);
console.log('p5:', p5);