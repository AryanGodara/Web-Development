//? Classes
// A class is like a blueprint for an object (it describes how one should be made)


//? Class Constructors
class User {
    constructor(username, email='not_entered', phone_no = null , address = undefined) {
        // set up properties of the object
        this.username = username;
        this.email = email;
        this.phone_no = phone_no;
        this.address = address;
        this.score = 0;
    }
    // We don't 'comma separate' different methods inside a class (unlike objects)
    login () {
        console.log(`${this.username} just logged in`);
        return this ;
    }
    logout () {
        console.log(`${this.username} just logged out`);
        return this ;
    }
    incScore () {
        this.score++ ;
        console.log(`${this.username} has a score of ${this.score}`);
        return this ;
    }
};

const userOne = new User('mario','mario@netninja.com','999888777') ;
const userTwo = new User('luigi') ;
/* 
 * The 'new' keyword
 * 1. It creates a new empty object {}
 * 2. It binds the value of 'this' to the new empty object
 * 3. It calls the constructor function to 'build' the object
*/

console.log(userOne);
console.log(userTwo);


//? Class Methods
userOne.login();
userOne.logout();
userTwo.login();
userTwo.logout();

//? Method Chaining
console.log('\n');
userOne.login().incScore().incScore().logout();


//? Class Inheritance (subclasses)
class Admin extends User{
    // If this class doesn't have a constructor of itself, it will look for the constructor of the
    // parent class (or the super class).
    deleteUser (user) {
        users = users.filter( (u) => {      // making changes to the 'global' users array.
            return u.username !== user.username ;
            // Returns true, only for users that are NOT in the parameter.
            // So, only the rest of the users reamin in the array, selected one is removed
        })
    }
};

const userThree = new Admin('shaun', 'shaun@ninja.com', '99887766555', 'earth,milky way');
console.log(userThree);
console.log('\n');

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);  // Only the 'Admin Users' have the priviledge to remove users
console.log(users);





//? Super()
// Suppose we want to create some additional fields inside the subclass, apart from the ones present
// in the superclass. For that, we have to use the 'super' keyword

class normalUser {
    constructor(username, email='not_entered') {
        // set up properties of the object
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    // We don't 'comma separate' different methods inside a class (unlike objects)
    login () {
        console.log(`${this.username} just logged in`);
        return this ;
    }
    logout () {
        console.log(`${this.username} just logged out`);
        return this ;
    }
    incScore () {
        this.score++ ;
        console.log(`${this.username} has a score of ${this.score}`);
        return this ;
    }
};

class Director extends normalUser{
    constructor(username, email, title){
        super(username, email); // Ask for the constructor of parent class, to set these fields
        this.title = title;

        //! We MUST call the super constructor, in derived class (this one) before
        //! accessing 'this' or 'returning fom derived constructor'
    }

    deleteUser(user){
        users = users.filter ( u => u.username !== user.username ) ;
    }
};

const direcUser = new Director('aryan', 'aryan@email.com', 'black-belt-ninja');
// Passed an extra third parameter, not present in objects of class normalUser

console.log(direcUser);


//? Old way of doing, what classes do now

function OldUser (username, email) {
    this.username = username ;
    this.email = email ;
    this.login = function () {
        console.log(`${this.username}`);
    };
}

const old1 = new OldUser('mario','mario@email.com');
const old2 = new OldUser('luigi','luigi@email.com');

console.log(old1,old2);