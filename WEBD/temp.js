class Point {
    constructor(x,y){
        this.x = x ;
        this.y = y ;
    }

    static displayName = "Point" ;

    static distance (a,b) {
        const dx = a.x - b.x ;
        const dy = a.y - b.y ;

        return Math.hypot(dx,dy) ;
    }
};

const p1 = new Point(5,5) ;
const p2 = new Point(10,10) ;
const p3 = new Point(89) ;

// Calling 'static' properties and methods, through instances
console.log(p1.displayName) ;       // undefined
console.log(p1.distance) ;          // undefined

console.log(p2.displayName) ;       // undefined
console.log(p2.distance) ;          // undefined

console.log(Point.displayName) ;    // Point
console.log(Point.distance(p1,p2)); // 7.07...
console.log(Point.distance(p2,p3)); // NaN


//? Binding 'this' with prototype and static methods
// When a static or prototype method is called without a value for 'this', such as by assigning the
// method to a variable and then calling it, the 'this' value will be undefined inside this method.
// This behaviour will be the same even if "use strict" directive isn't present, because code
// within the 'class' body's syntactic boundary is always executed in 'strict mode'.

class Anianimal {
    speak () {
        return this ;
    }
    static eat () {
        return this ;
    }
};

let ani1 = new Anianimal
ani1.speak() ;
let speak1 = ani1.speak;
console.log('speak1', speak1()) ;   // undefined
let speak2 = ani1.speak();
console.log('speak2', speak2) ;   // undefined

Anianimal.eat() // Class Anianimal
let eat = Anianimal.eat ;
console.log(eat()); // undefined


//? Private field declarations :-
class Rectangle {
    #height = 0 ;       // Now #var_name is a private property
    #width;
    constructor (h,w){
        this.#height = h ;
        this.#width = w ;
    }
};
//* Private fields can only be declared up-front in a field declaration
//! Private fields cannot be created later through assigning to them, the way normal properties can.


//? Extending classes
class Animal {
    constructor(name){
        this.name = name ;
    }

    speak () {
        console.log(`${this.name} makes a noise`) ;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name) ;   // Calls the super class's constructor, and pass in the 'name' parameter
    }

    speak () {
        console.log(`${this.name} barks`)
    }
}

let d = new Dog('Mitzie') ;
d.speak() ;


//? One may also extend traditional function-based classes
function Anim (name) {
    this.name = name ;
}

Anim.prototype.spe = function () {
    console.log(`${this.name} makes a noise`) ;
}

class Doggy extends Anim {
    speak() {
        console.log(`${this.name} barks`) ;
    }
}

let d2 = new Doggy('Mitzie');
d2.speak() ;