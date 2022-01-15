//! Define the Function 'getTodos'
const getTodos = (callback) => 
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

    request.open( 'GET' , 'todos.json' ) ;  // No path, since we're in the same directory
    request.send();
}

//! Call the Function 'getTodos'
getTodos( (err,data) => {
    console.log('callback fired');

    if ( err )
        console.log(err);
    else
        console.log(data);
});