//? Filter Function

const scores = [10 , 30 , 15 , 25 , 50 , 40 , 5 ]

//* The filter method is non-destructive, so, it doesn't alter the original array
// scores.filter( score => {
//     // return true ;   // All elements pass the filter
//     // return false ;  // None of the elements pass the filter

//     return score > 25 ; // Only the elements that are greater than 25, pass the filter
// });

console.log( scores ) ; // No change to the original array

//* So, to use the function, we store the new array, in a variable, or print it directly lol

const filtered_scores = scores.filter( score => {
    return score > 20 ;
});
console.log(filtered_scores);

//? Uses of filter function
const users1 = [     // A list of suers
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];

const premium_filtered_users = users1.filter( user => user.premium );

console.log(premium_filtered_users);



//? Map Method   ( Non-Destructive Mehtod )
/*
* Map method takes an array, and then maps it to a completely new array. i.e., it iterates an array
* and returns an updated value for each item in the array. And then pushes that updated value into
* the new array.
*/

const prices = [ 20 , 10 , 30 , 25 , 15 , 40 , 80 , 5 ];

const sale_prices = prices.map ( price => Math.floor(price/2) );
console.log(sale_prices);

const products1 = [
    {name: 'gold star', price: 20 },
    {name: 'mushroom', price: 40 },
    {name: 'green shells', price: 30 },
    {name: 'banana skin', price: 10 },
    {name: 'red shells', price: 50 },
];

const special_sale_prices = products1.map( item => {
    return ( item.price > 20 ) ? item.price/2 : item.price ;    
    //! If we do this, it only returns a Number (so, we get an array of numbers only, not objects)
});
console.log(special_sale_prices);

const special_sale_products = products1.map ( item => {
    if ( item.price > 20 )
        return { name: item.name , price: item.price/2 };
    else
        return item ;
});
console.log(special_sale_products);


//? Reduce Method
// It doesn't necessarily return a new array. It can return any single value, which could be an
// array or a string or a number.

const scores1 = [ 10 , 20 , 60 , 40 , 70 , 90 , 30 ];

// We count the no. of scores above 50
const res1 = scores1.reduce( (accumulator,cur_element) => {
    if ( cur_element > 50 )
        accumulator++ ;
    
    return accumulator;
}, 0 ); // This '0' which is the second argument, is the 'initial' value of the accumulator_var.
console.log(res1, typeof(res1));    // OP: 3 number

const scores2 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
];

// We want to calculate the scores of 'mario' only
const mario_scores = scores2.reduce( (acc,cur) => {
    if ( cur.player === 'mario' )
        acc += cur.score;
    return acc; // Return the acc at the end
}, 0 );
console.log(mario_scores);



//? Find Method
// Returns the value of the 'first' element that passes the test
const found1 = scores1.find( (score) => {
    return score > 50 ; // Return true, if the score is greater than 50 (score = cur element)
});
console.log(found1);



//? Sort Method     // Destructive Function (changes the original variable)
// Sort the data based on some property, or some other criteria

const names = [ 'mario', 'shaun', 'chun-li', 'yoshi', 'luigi' ];

names.sort();
console.log(names); // Changes the original array
names.reverse();        //! Reverses the elements in the iterator.
console.log(names); // Changes the original array


const products = [
    {name: 'gold star', price: 20 },
    {name: 'mushroom', price: 40 },
    {name: 'green shell', price: 30 },
    {name: 'banana skin', price: 10 },
    {name: 'red shell', price: 50 },
];
// Sort these in order of their prices
// We'll need to pass in the cmp or comp function (from CPP, remember)
// Below, a and b are the two 'product list' elements (sadly no data type in arguments of JS)

products.sort ( (a,b) => {
    if ( a.price > b.price )    // We want to reverse their relative positions
        return 1 ;  // A positive number
    else if ( a.price < b.price )   // We don't want to make any changes
        return -1 ; // A negative number
    else
        return 0 ;  // No reordering is needed,

});   // return a.price < b.price   // This could also have worked, so just write a.price<b.price

console.log(products);



//? Chaining Array Methods, for the 'product' array, as an example

const filtered_array = products.filter( product => product.price > 20 );
console.log(filtered_array);
// Now, map this filtered array to the new array, all prices doubled
const mapped_array = filtered_array.map( prod => {
    // return { name: prod.name , price: prod.price*2 };    // return array of objects
    return `The ${prod.name} costs ${prod.price*2} pounds after inflation lol`;    // Return array of strings
});
console.log(mapped_array);

//* Instead of thing lengthy procedure, we can use method chaining

const promos = products.filter( product => product.price > 20 ).map( prod => `The ${prod.name} costs ${prod.price*2} pounds after inflation lol` );
console.log(promos);

//* Or, vice versa: First mamp, then filter
const last = products
             .filter( product => product.price > 20 )
             .map( prod => `The ${prod.name} costs ${prod.price*2} pounds after inflation lol` );
             // Making this a bit easier to read

console.log(last);