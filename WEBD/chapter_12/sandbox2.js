const getTodos = (callback_var) => {    //? This parameter, is a function (a callback function)

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if ( request.readyState === 4 && request.status == 200 )
            callback_var(undefined, request.responseText);          // In this case, there's no error
        else if ( request.readyState === 4)
            callback_var('could not fetch data',undefined); // No 'data', due to the error
    });

    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();

};


//* Now, the code is more reusable, as it's inside a function
// getTodos();

/*
 * At the moment, every time we call this todo Function, what we're doing each time is logging in 
 * the response to the console.
 * 
 * Now, it would be nice if we could instead, put in a callback function to get to getTodos(), which
 * we then fire over there, so we can specify how we want to react in that callback function.
 * 
 * Then, everytime we call getTodos(), we could specify a different kind of callback functions, to 
 * do something different each time, if we wanted to.
*/

console.log(1);
console.log(2);

//? Now, we specify a callback function in the function call as an argument
getTodos( (err, data) => {    //* This is the convention, we do 'error' first, then the 'data'.
    console.log('callback fired');
    if ( err ){     // If there is not eror, then this argument will be 'undefined'
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(3);
console.log(4);


//! The 'getTodos()', takes some time to get completed, but still it does not stop the program 
//! from running.
//! Instead, the code runs 'asynchronouly' and we get the 4 console.log() statements in a row
//! And after that, when the HttpRequest is completed, it runs after the 4 console.log() statments.