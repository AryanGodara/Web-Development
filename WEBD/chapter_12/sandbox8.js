//? Fetch API

fetch('todos/luigi.json') //* This returns a 'promise' including resolve and reject
.then ( (response) => {
    console.log('promise resolved' , response);
    return response.json();    //* This returns a promise which can either bre rejected or resolved
})
.then ( (data) => {
    console.log('data received' , data);
})
.catch( (err) => {
    console.log('promise rejected' , err);
});