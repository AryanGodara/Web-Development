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

//! Defining the callback function
// const callback_func = ( err , data ) => {
//     console.log(data);
// }

//! Call the Function 'getTodos' for all three json files in 'todos/ directory'
// getTodos( 'todos/luigi.json' , (err,data) => {
//     console.log(data);
    
//     getTodos( 'todos/mario.json' , (err,data) => {
//         console.log(data);
        
//         getTodos( 'todos/shaun.json' , (err,data) => {
//             console.log(data);
            
//         });
//     });
// });
//* The method above is referred to as 'callback hell' because of the messed up, difficult to 
//* understand nature of the code written above.
//TODO: Instead, we use something called 'promises'


//? The first parameter is the 'resource' , the second parameter, is the previously defined function
// getTodos('https://jsonplaceholder.typicode.com/todos/' , callback_func );


// Call getTodos
getTodos('https://jsonplaceholder.typicode.com/todos/')
.then( ret_data_from_getTodos => {
    console.log('promise resolved' , ret_data_from_getTodos);
})
.then( err => {
    console.log('promise rejected' , err);
});

//! If instead of 'catch', we write: 'then', then it'll run everytime, whether we get an error or not