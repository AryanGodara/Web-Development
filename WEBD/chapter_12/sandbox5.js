//! Define the Function 'getTodos'
const getTodos = ( resource , callback) => 
{
    const request = new XMLHttpRequest() ;

    request.addEventListener( 'readystatechange' , () => {
        if ( request.readyState === 4 && request.status === 200 )   // Returned with success
        {
            // First, we'll store the data that we recevied form the xmlhttprequest
            const data = JSON.parse(request.responseText);
            callback(undefined,data);   // Call the 'callback' function
        }
        else if ( request.readyState === 4 )    // Returned, but w/o success
        {
            callback(err,undefined);
        }
    });

    request.open( 'GET' , resource ) ;
    request.send();
}

//! Defining the callback function
const callback_func = ( err , data ) => {
    console.log(data);
}




//? Promise Example

const getSomething = () => {

    return new Promise( (resolve,reject) => {   //* A promise is a 'callback function'
        // fetch something

        const now = new Date() ;

        if ( now.getSeconds() % 2 === 1 ) // The second rn is odd
            resolve('some data');   //* If it's a success, we call the resolve 'callback' function
        else                        // The second rn is even
            reject('some error')    //! If it's a failure, we call the reject 'callback' function
    });
};

//TODO: Call getSomething()

getSomething().then( (data) => {
    console.log(data);  // data is what the 'getSomething' function returned in the case of success
} , (err) => {
    console.log(err);   // err is what the 'getSomething' returned, in the case of an error
});

//TODO: Write 'getSomething()' again, but in a 'neat' manner
getSomething()
.then( 
    //? First parameter, a 'function' : In case of success
    (data) => {
    console.log(data);  // data is what the 'getSomething' function returned in the case of success
} , 
    //? Second parameter, also a 'function' : In case of failure
    (err) => {
        console.log(err);   // err is what the 'getSomething' returned, in the case of an error
});

getSomething()
.then( data => {
         console.log(data); 
})
.catch( err => {
    console.log(err);
});