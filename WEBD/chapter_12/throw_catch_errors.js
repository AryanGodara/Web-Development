const getTodos = async () => {
    // const response = await fetch('todos/wrong.json');   // error in the JSON file
    // const response = await fetch('todos/luigi.json');   // no errors
    const response = await fetch('todos/lluigi.json');  // error in file path //! Fetch fails here

    if ( response.status != 200 ){  //? We throw a custom error here
        throw new Error('error message is, I cannot fetch the data');  // Creating a new error object
    }
    
    const data  = await response.json();
    return data ;
};

getTodos()
    .then( data => console.log('resolved:', data) )
    .catch( err => console.log('rejected:', err.message) ) ;