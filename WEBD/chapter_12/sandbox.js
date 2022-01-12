//! The API that we'll be using to practice in this chapter is : JSONplaceholder ( 'https://jsonplaceholder.typicode.com' )
//? Making HTTP REquests (XHR: XMLHttpRequest)

const request = new XMLHttpRequest() ;
//* XML is an old data format that we used to work with before JSON arrived at the scene


//* This event listener fires every time, there's a 'state change' in the request/
//* Now, a state change, just means that the request is going through these different phases of
//* the request (and there's four in total).
//TODO: So, what we'll do below (in the event listener), is log out those phases (console.log)
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);   // readyStates is a 'property', not a 'method
    //* 'readyState' property gets us the state that the request is in.

    //? At this point, the request is compelte  && the request was a 'success'
    if ( request.readyState === 4 && request.status === 200 )     
        console.log(request, request.responseText);  // Returns the response as text.
    else if ( request.readyState === 4 )
        console.log('Request was finished, but there was problem, and we could not fetch the data');

    //! The Check above is not complete. Because, the request goes through all the 4 phases, even
    //! when there has been some error, and it always reaches state(phase) 4.
    //! In that case, even though the request will be completed, it'll come back with some error code.


})


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//* First argument (string): The type of request we want to make ( GET POST etc. ).
//* Second argument (string): Where we want to make the request to, what is the endpoint, we want
//*                           to get the data from (normally a URL).


//TODO: At this moment, the request hasn't been 'made'. It has been 'set up'.
//TODO: To actually make the request (to send the request), we write :-
request.send();

//? In our code, we can track the progress of a request using an event listener and a specific
//? event called: 'Ready State Change'. (We attach this to the request object itself) (above)
/*
 * The 'XMLHttpRequest.readyState' property returns the state an XMLHttpRequest client is in.
 * An XHR client exist in one of the following states :-
 * 
 * Value: 0
 * State: UNSENT
 * Description: Client has been created. open() not called yet.
 * 
 * Value: 1
 * State: OPENED
 * Description: open() has been called.
 * 
 * Value: 2
 * State: HEADERS_RECEIVED
 * Description: send() has been called, and headers and status are available.
 * 
 * Value: 3
 * State: LOADING
 * Description: Downloading; responseText holds partial data.
 * 
 * Value: 4
 * State: DONE
 * Description: The operation is done.
*/