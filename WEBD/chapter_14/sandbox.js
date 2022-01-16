// store data in local storage
localStorage.setItem('name', 'mario');  // Adds the key-value pair to localStorage
localStorage.setItem('age', 50);

console.log(localStorage);

// get data from local storage
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('not_yet_defined_var'));

// updating data
localStorage.setItem('name', 'luigi');
localStorage.age = 40;

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));

// deleting data from local storage
localStorage.removeItem('name');
console.log(localStorage.getItem('name'));

localStorage.clear() ;  // Clears the localStorage, removes everything


//? Sttringifying and Parsing Data
// Everything we store in our localStorage is in the form of a string, so we somehow have to take a
// complex data structure, like an array, and turn it into a string

// This is similar to getting and sending JSON data, which is also into the form of a string

const todos = [
    { text: "play mariokart" , author: "Mario" },
    { text: "avoid mario" , author: "Luigi" },
    { text: "go kart racing" , author: "Shaun" }
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

// Now, we have to retrive it, and convert it back to an array

const stored_list = localStorage.getItem('todos');
console.log(stored_list);   // Still a string
console.log(JSON.parse(stored_list));   // Turns it back to an array