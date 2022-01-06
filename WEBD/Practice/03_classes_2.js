//? The Constructor Method
/*

 * The constructor method is a special method we use to create and initialize objects of a class.

 * A class can only have one special method with the name constructor, and attempting to write a 
 * class containing more than one constructor will throw a //! SyntaxError

 * To implement inheritance, we can use the 'super' keyword in a constructor to call a parent 
 * class constructor.
 
*/

//? Static Methods
/* 
 * Static methods are methods relevant to all instances of a class -- not just any one instance.
 * These methods receive information from their agruements and not a class instance, which allows 
 * us to invoke a class' static methods without creating an isntance of the class. In fact, we 
 * actually can't call a static method on an instantiated class object (attempting to do so throws
 * a //! TypeError).
 * 
 * We define a class' static methods using the 'static' keyword. We typically use these methods to
 * create utility functions for applications, as they can't be called on class objects.
*/
//TODO Example :-

class Point1 {
    constructor(x,y){
        this.x = x ;
        this.y = y ;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx**2 + dy**2);
    }
}

const pt1 = new Point1(5,5);
const pt2 = new Point1(10,10);

//* The correct way ot call a static method
console.log(Point1.distance(pt1,pt2));

//! Attemp to call a static method on an instance of the class
try {
    console.log(pt1.distance(pt1,pt2));
}
catch(e) {
    console.log(e);
}


//? Inheritance
/* 
 * In essence, this construct allows us to create an object prototype or class that's an extension
 * of another object prototype or class. A class inheriting from some other class (referred to as a
 * superclass or parent class) is called a subclass (or a child class).
 * 
 * The subclass inherits the superclass' methods and behaviours, but it can also declare new ones or
 * even orride existing ones.
*/

//? Subclassing with the 'extends' keyword

class Animal1 {
    constructor(n) {
        this.name = n;
    }

    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog1 extends Animal1 {
    speak() {
        console.log(this.name, 'barks.');   // Function from superclass overrided.
    }
}

let spot1 = new Dog1('Spot1');
spot1.speak();

spot1 = new Animal1('Spot1');
spot1.speak();

//* We can also extend functional classes :-
function Animal2 (n) {
    this.name = n;
}

Animal2.prototype.speak = function () { console.log(this.name, 'speaks.') }

class Dog2 extends Animal2 {
    speak() {
        console.log( this.name, ' speaks.');
    }
}

let spot2 = new Dog2('Spot2');
spot2.speak();

spot2 = new Animal2('Spot2');
spot2.speak();


//? Superclass Calls Using the 'super' keyword
// We use the super keyword to call functions on an object's parent

class Animal3 {
    constructor(n) {
        this.name = n;
    }

    speak () {
        console.log(this.name, 'speaks.');
    }
}

class Dog3 extends Animal3 {
    speak() {
        super.speak();
        console.log(this.name, 'barks.');
    }
}

let spot3 = new Dog3('Spot3');
spot3.speak();

console.log('\n\n');

//? Extending an object
/*
 * The ability to extend multiple classes from the same superclass (or model multiple object types
 * from the same prototype) is powerful because it provides usu with certain guarantees about the
 * basic functionality of the subclasses; as extensions of the parent class, subclasses are 
 * guaranteed to (at minimum) have the superclass' fields, methods, and functions.
 * 
 * //TODO: Example
 * 
 * In this example, we call the superclass constructor using super(), override a superclass function
 * ( speak() ), add an additional property ( collarColor ), and add a new subclass method ( collar () ).
*/

'use strict'

class Animal {
    constructor(name) {
        this.name = name;
        this.animal_type = 'Animal';
    }

    type () {
        console.log ( this.name, 'is of type', this.animal_type );
    }

    speak () {
        console.log ( this.name, 'speaks.' );
    }
}

class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.animal_type = 'Dog';
        this.collar_color = collarColor;
    }

    speak () {
        console.log( this.name, 'barks.' );
    }

    collar () {
        console.log( this.name, 'has a', this.collar_color, 'collar.' );
    }
}

let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();

console.log('\n');

// Because the Animal constructor only expects one argument, only the first value passed to it is used.
spot = new Animal('Spot','White');
spot.type();
spot.speak();

try 
{
    spot.collar();
}
catch (e) 
{
    console.log(e, '(Collar is a method of Dog, not Animal');
}