//? Function declaration
function greet(){
    console.log('Hello There');
    console.log('General Kenobi');
}

//* Function expression
const speak = function(){
    console.log('Understandable, Have a Nice Day!')
};

let newline = '\n';     // Great hack lol

greet() ;   // Calling the function
greet() ;   // Calling the function
console.log(newline)
speak() ;
speak() ;



//? Arguments and Parameters
const say_my_name = function(name)
{
    console.log('Hello, ' , name);
}

say_my_name();              // OP: Hello, undefined
say_my_name('Peter');

const speak2 = function(time, name)
{
    console.log(`good ${time} ${name}`);
}

speak2('morning','peter');
speak2('peter');
speak2();

const speak3 = function(time='night', name='luigi')
{
    console.log(`good ${time} ${name}`);
}

speak3('morning','peter');
speak3('peter');
speak3();



//? Returning Values
const calcArea1 = function(radius)  //! No need to even enter the return type lol
{
    return Math.PI * radius**2 ;
}

let var12345 = calcArea1(3) ;
console.log(var12345) ;

const calcVol = function(area)
{
    return area**2;
}

console.log(calcVol(calcArea1(3)));


//! ARROW FUNCTIONS :-

const calc1 = (radius) => {
    return Math.PI * radius**2;
};
console.log(calc1(4));

//* If there is only one parameter 'radius in the above case, then we can skip the '()' around it

const calc2 = radius => {
    return Math.PI * radius**2;
}

//! But, if there are '0' and '>1' parameters, then we need to include the parenthesis

//? If there is only '1' statement in the function body, we can skip the '{}' and 'return' keyword also.

const calc3 = radius => Math.PI * radius**2 ;
console.log(calc3(3));

//TODO : Turn the following functions to arrow functions (Questions are in the video lol) :-

const greet2 = () => 'hello, world';

const bill = (products, tax) => {
    let total = 0 ;
    for ( let i =  0 ; i < products.length ; i++ )
        total += products[i] + products[i]*tax ;
    
    return total ;
}

console.log(bill([10,15,30], 0.2));


//? Foreach Method and Callbacks

const my_func = (call_back_func) =>
{
    // do somethings
    let value = 20 ;
    call_back_func(value);
}

// Now, call this 'my_func' function

my_func(function(value)
{
    // do something
    console.log(value*2) ;
});

// Now, let's try this by using an arrow function instead

my_func( value => console.log(value**2) );  // Here, 'value' is the parameter for the function parameter.

let people = [ 'mario', 'luigi', 'ryu', 'shaun', 'chun-li' ];

people.forEach(function(person){    // Here the argument 'person' will be the variable storing each element of the array (eg.: for person in people (PYTHON) OR for auto person: people (C++))
    console.log(person);
})
console.log(newline);
people.forEach( person => console.log(person, person));

// We, can also take an additional parameter: 'The 'index' of the parameter'.
console.log(newline);
people.forEach( (element, index) => {
    console.log(`The ${index+1}'th element is ${element}`);
});

console.log(newline);
// We can also define the function argument somewhere else too.
const log_person = (person, i) => console.log(`The ${i+1}'th element is ${person}`);

people.forEach(log_person); // No need for any '()' or parameters for the 'log_person' function.