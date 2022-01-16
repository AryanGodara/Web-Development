//? Async and Await

//* After adding the 'async' keyword before the parameters, the function becomes 'asynchronous'
//? This will now return a promise, irrespective of the content written inside the function.
const getTodos = async () => {

    const response = await fetch('todos/luigi.json')
    //? The 'await' keyword stops (or rather delays) the JavaScript from assining any value to the
    //? var 'response' until the 'fetch' returns a 'promise' which is either rejected or revolved.
    //* This is much neater than using the .then function

    console.log(response);

    console.log('\n');  //! This line doesn't run asynchronously, as it's inside the function itself

    const data = await response.json();
    //? 'await' once again stalls JavaScript, until the 'response.json' returns the promise
    console.log(data);

    console.log('\n\n');

    //* Now, the advantage of this way is that we can chain together many different things and then
    //* we can do them sequentially.
    //* We'd be waiting for one promise on each step, and so on.
    //TODO: Example in the commented code below :-
    // const r1 = await fetch('todos/luigi.json');
    // const d1 = await r1.json();
    // console.log(d1 , '\n');
    // const r2 = await fetch('todos/mario.json');
    // const d2 = await r2.json();
    // console.log(d2 , '\n');
    // const r3 = await fetch('todos/shaun.json');
    // const d3 = await r3.json();
    // console.log(d3 , '\n');

    return data
};

// const test = getTodos();    //* The var 'test' is now a promise.
// console.log(test);
//? Now, when we use the above method, we get the promise back, not the data itself. Because it
//? takes some time to finish the request.

// getTodos(); //! We don't actually need to store the result inside a variable

//TODO: So, we use the .then() method to get the data

console.log(1);
console.log(2);
getTodos()
    .then( data => console.log('resolved:', data) )
    .catch();
console.log(3);
console.log(4);     //? To show that the code below these is 'non-blocking' or 'asynchronous'
