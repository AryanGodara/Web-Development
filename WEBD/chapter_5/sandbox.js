//? Object Literals

let first_object_created = { 
name: 'crystal',
age: 30,
email: 'crystal@ninja.com',
location: 'berlin',
blogs: ['why mac & cheese rules', '10 things to make with lego'],
};

console.log(first_object_created);
console.log('age = ', first_object_created.age);
console.log(first_object_created['name']); //* Kind of like a dictionary/map key
let key = 'email';
console.log(first_object_created[key]);    //* THIS WORKS FINE
console.log(first_object_created.key);     //! THIS IS UNDEFINED
console.log('\n') ;
for ( element in first_object_created )    //! Figured this out on my own B)
console.log(element);
console.log(typeof(first_object_created));  //? OP: object



//? Adding methods to objects
let user = { 
name: 'crystal',
age: 30,
email: 'crystal@ninja.com',
location: 'berlin',
blogs: ['why mac & cheese rules', '10 things to make with lego'],

// Adding a method to the object
login: function(){console.log('user logged in...')},

logBlogs: function(){
        console.log(this.blogs);
    },
callObject: function() { console.log(this) },
};

user.login();      //TODO Kind of like using a string method lol
user.logBlogs();
user.callObject();
console.log(this);  //! The GLOBAL THIS refers to the 'window object' in Javascript