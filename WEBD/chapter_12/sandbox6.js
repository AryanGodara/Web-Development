//! Define the Function 'getTodos'
const getTodos = resource => 
{
    //? Refer to sandbox5.js for context of 'promises'
    return new Promise ( (resolve,reject) =>
    {
        const request = new XMLHttpRequest() ;

        request.addEventListener( 'readystatechange' , () => {
            if ( request.readyState === 4 && request.status === 200 )   // Returned with success
            {
                // First, we'll store the data that we recevied form the xmlhttprequest
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if ( request.readyState === 4 )    // Returned, but w/o success
            {
                reject('error getting resource')
            }
        });

        request.open( 'GET' , resource ) ;
        request.send();
    });
};


//* Promise Chaining
getTodos('todos/luigi.json')
.then( data => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/mario.json');    // Now, this 'then', will return a promise
})
.then( data => {
    console.log('promise 2 resolved', data);
    return getTodos('todos/shaun.json');
})
.then( data => {
    console.log('promise 3 resolved', data);
    console.log('\n\n');
    return getTodos('todos/blabla.json');   // This will return an error
})
.catch(err => {
    console.log('promise rejected', err);
    console.log('\n\n');
});
//? We just need a 'single catch function', and it'll work for all of them

// console.log('\n');
/*
 ! Now, I wanted this to run 'between' the two pieces of code above and below this one.
 ! But, I ironically forgot the central concept of this chapter 'Async Javascript'
 * So, while the two pieces of code above and below this were 'fetching' data from their
 * respective sources, the 'console.log' statement ran, making it the first statement to run
 ? Now, what I'm going to do is, instead of having a newline function out in the open
 TODO: I'll write newline code at the end of the above code snippet
*/

//? This time, the 'error' promise is in the middle
getTodos('todos/luigi.json')
.then( data => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/mario.json');    // Now, this 'then', will return a promise
})
.then( data => {
    console.log('promise 3 resolved', data);
    return getTodos('todos/blabla.json');   // This will return an error
})
.then( data => {
    console.log('promise 2 resolved', data);
    return getTodos('todos/shaun.json');
})
.catch(err => {
    console.log('promise rejected', err);
});