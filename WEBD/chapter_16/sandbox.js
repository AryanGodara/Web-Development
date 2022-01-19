const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

//? Append data to the HTML
const addRecipe = (recipe,id) => {
    const time = recipe.created_at.toDate() ;
    let html = `
        <li data-id="${id}">
            <div> ${recipe.title} </div>
            <div> ${time} </div>
            <button class="btn btn-danger btn-sm my-2">Delete</button>
            <br>
        </li>
    `;
    list.innerHTML += html;
};

//? Remove data from the HTML
const removeRecipe = (id) => {
    
    //* We already have an eventlistener, to remove the 'deleted' document from the DB. This
    //* function must then remove that field from the HTML UI, which was earlier being done 
    //* manually, by simply refreshing the page

    const recipes = document.querySelectorAll('li');    // Get a collection of all the <li> tags

    recipes.forEach( recipe => {
        if ( recipe.getAttribute('data-id') === id )
            recipe.remove();    // .remove() method removes the tag from the DOM
    })
}



//? Get Collections
// db.collection('recipes')    //* Gives us a reference to the 'recipes' collection in the firebase DB

// db.collection("recipes").get().then( (snapshot) => {

//     // When we have the data from the response ( .get() returns a promise )
//     // console.log('snapshot.docs[0].data() :-', snapshot.docs[0].data());
//     // console.log('snapshot.docs.data():- ', snapshot.docs[0].data());
//     // console.log('snapshot :- ', snapshot);

//     // console.log('Using .forEach(), to view data of all the items in the docs :-');
//     snapshot.docs.forEach( doc => {
//         // console.log(doc.data());
//         // console.log(doc.id);
//         addRecipe(doc.data() , doc.id);
//     })

// }).catch( err => console.log(err) );

    //* Commented out the above code, because to run this, we have to refresh the page manually,
    //TODO: Now, we're using real-time event listeners, code is written below

//? Real-time listeners
// This listener will actively listen ,at all time, to our database collection
// So, if there are any changes in the collection, it'll automatically reflect the change in the
// UI, of the webpage, without us having to reload the page after every change.

const unsub = db.collection('recipes').onSnapshot( snapshot => {
    // The .onSnapshot() takes a snapshot of the collection, everytime there's a change, and the
    // parameter 'snapshot' represents that snapshot of the collection(database).
    //? So, everytime there's a change in the DB, the 'onsnapshot' callback function is fired
    // console.log(snapshot);
    // console.log(snapshot.docChanges()); // Returns the change(s) made in the collection
    snapshot.docChanges().forEach( change => {
        const doc = change.doc;
        if ( change.type === 'added' )
            addRecipe(doc.data(), doc.id);  // Call the function, that appends to the html
        else if ( change.type === 'removed' )
            removeRecipe(doc.id);           // Call the function, that removes from the html
    });
});


//? Add Documents
form.addEventListener( 'submit' , e => {
    
    e.preventDefault(); // Stops the page from reloading
    
    const now = new Date() ;    //* Get the exact time when the object was created

    // Define an object, as firebase takes in JS objects, to store them in the database
    const recipe = {
        title: form.recipe.value ,
        //* recipe is the ID of the input field, we're taking the value inside the text input field
        created_at: firebase.firestore.Timestamp.fromDate(now)
        // We don't care about the 'author' rn, and will ignore that field (leave it blank)
    };

    db.collection('recipes').add(recipe).then( () => {
        console.log('recipe added:', recipe);
    }).catch( err => console.log(err) );

    // .add() also returns a promise (aync function), so we use .then(), w/o any parameters, as
    // we're not 'getting' anything from the database, rather, we're uploading things to the db.

});



//? Delete documents

// We can click anywhere in the ul, but this eventlistener, is specifically for the cases when
// we click on the 'delete' buttons of the individual <li> tags inside the <ul> tag.
list.addEventListener( 'click' , e =>{
    // console.log(e);
    if ( e.target.tagName === 'BUTTON' ){
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(id);
        // db.collection("recipes").doc(id);   // To get a refernce to the document with this id
        db.collection("recipes").doc(id).delete()  // Then delete it: .delete() = aync function
            .then( console.log('recipe delete') );
    }
} );




//? Unsubscribing
// We've added an 'unsubscribe' button at the bottom of the webpage, if we click that button, 
// we want to stop refreshing the page in real-time
button.addEventListener( 'click' , e => {
    unsub();
    console.log('unsubscribed from collection changes');
});