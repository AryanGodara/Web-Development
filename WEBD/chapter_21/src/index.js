import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc,
    onSnapshot,
    query, where,
    orderBy, serverTimestamp,
    getDoc,
    updateDoc,
} from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAngTEgkqwfdfzkhbSVsDIF5Hz5mWmPPJ8",
    authDomain: "fir-9-dojo-da94f.firebaseapp.com",
    projectId: "fir-9-dojo-da94f",
    storageBucket: "fir-9-dojo-da94f.appspot.com",
    messagingSenderId: "883265232155",
    appId: "1:883265232155:web:f452536ffce4af324247be"
};

//! Remember npm run build            command, if in case, you close this window


//? init firebarse app
initializeApp(firebaseConfig);  // This line connects us to our firebase backend



//? init services
const db = getFirestore();
    // 'db' represents our database connection, which we're storing in this constant now
const auth = getAuth();
    // this initializes the authentication service, and we use the 'auth' constant everytime we want
    // to do something with authentication, like sign in, log in or log out

//? collection ref    : Get a reference to on one of the collections in our database (db)
const colRef = collection(db, 'books');


//* queries
// const q = query(colRef, where("author", "==", "harari"));
// const q = query(colRef, where("author", "==", "harari"), orderBy('title', 'desc')) ;
const q = query(colRef, orderBy('created_at')) ;


//? Get real-time collection data

// onSnapshot(colRef, snapshot => { //* This was used to get 'all' the data from collection
//     let books = [] ;

//     snapshot.docs.forEach( doc => { 
//         books.push( { ...doc.data() , id:doc.id } )
//     });

//     console.log(books) ;
// });
//TODO: We can also use the functions below and above simultaneously, it'll just console '2' lists

const unsuba = onSnapshot(q, snapshot => {     //? Instead of the whole collection, we pass in the query now
    let books = [] ;

    snapshot.docs.forEach( doc => { 
        books.push( { ...doc.data() , id:doc.id } )
    });

    console.log(books) ;
});


//? Adding Documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener ( 'submit' , e => {
    e.preventDefault();

    addDoc(colRef, {
        title: addBookForm.title.value ,
        author: addBookForm.author.value,
        created_at: serverTimestamp()
    })
    .then ( () => {
        addBookForm.reset();
        //* addDoc returns a 'promise', so we use 'then' to empty the input fields after submitting
    })
});

//? Deleting Documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener( 'submit' , e => {
    e.preventDefault();
    console.log('delete clicked');

    const docRef = doc(db, 'books', deleteBookForm.id.value);   //* Local Variable

    deleteDoc(docRef)
        .then( () => {
            deleteBookForm.reset() ;
        });
});



//? Get a single document
//* Global Variable
const docRef = doc(db, 'books', '1WhYiZlm6UJhlWtbxO0q');


//* Real-Time Snapshot
//? When we pass in 'colRef', it sets up a subscription to the 'collection'. But when we pass in
//? 'docRef', it sets up a subscription to the individual 'document'
const unsubb =  onSnapshot(docRef, doc=> {
    console.log(doc.data(), doc.id );
});


//? Updating Documents
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', e => {
    e.preventDefault();

    const docRef = doc(db, 'books', updateForm.id.value);

    updateDoc(docRef, { // It only 'updates' what's entered, so it won't touch other fields
        title: updateForm.title.value,
    }).then( () => {
        updateForm.reset();
    });
});


//? Firebase Auth Setup
//TODO: We imported getAuth
//TODO: We delcared a new const called 'auth


//? Signing users up
const signupform = document.querySelector('.signup');
signupform.addEventListener('submit', e => {
    e.preventDefault();

    const email = signupform.email.value;
    const password = signupform.password.value;
    createUserWithEmailAndPassword(auth,email,password)
        .then( user_credential => {
            console.log('User Created: ', user_credential.user) 
            signupform.reset();
        })
        .catch( err => console.log(err.message) ) ;
});
//TODO: Firebase automatically logs in users, when they're 'created'


//? Logging in and out

const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', e => {
    signOut(auth)
        .then( () => console.log('User logged out') )
        .catch( err => console.log(err.message) ) ;
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', e => {
    e.preventDefault() ;

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then( cred => {
        console.log('User logged in: ', cred.user);
        loginForm.reset() ;
    })
    .catch( err => console.log(err.message) );
});


//? Listening/Subscribing to Auth Changes
//* Kind of like the subscription we used for changes to documents and collections

const unsubc = onAuthStateChanged(auth, user => {
    // If we're logged in, 'user' will be the logged in user
    // If we're logged out, 'user' will be NULL

    console.log('user status changed: ', user);
});


//? Unsubscribing to changes (auth and db)
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', e => {
    console.log('unsubscribing');
    unsuba();
    unsubb();
    unsubc();
});
