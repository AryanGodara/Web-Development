//? Event Basics: Click Events          //? Adding and Removing Elements (Both Covered)

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something New</li>' //* Append to the ul tag, in HTML.

    //? Or we can also do this :-
    const li = document.createElement('li');    // Create a new 'li' tag
    li.textContent = `Something new to do`;
    //TODO: Now, we have to add this newly created tag to the HTML of the page

    // ul.append(li);      //* Method 1, only appends to the bottom(end) of the parent tag
    ul.prepend(li);        //* Method 2, prepends it, (at the top of the parent tag)

    //! But the new tags we added above, don't have the 'EventListener click' property
})

// button.addEventListener('click', () => { //* Displays on console when clicked
//     console.log('You clicked me');
// });

const ul = document.querySelector('ul');
// ul.remove();    // Removes this element from the web page

//! Commented out the green part below, to try a new approach.
/*
* const items = document.querySelectorAll('li');  // Returns a NodeList of all the id tags
* 
* items.forEach( item => {
*     item.addEventListener('click', (event_var) => {
*         // console.log(`${event_var}item clicked`);
*         // console.log(event_var);
*         // console.log(event_var.target);  // Returns the tag we click on
*         // console.log(item);      // Does the same thing as above ^^
* 
*         // Below two are 'style' differences on the li tag, after button is clicked
*         // event_var.target.style.textDecoration = 'line-through';
*         // item.style.backgroundColor = 'green';
*         console.log('event on LI');
*         event_var.stopPropagation();
*         event_var.target.remove();
*     })
* })
*/



//? Event Bubbling (and delegation)

// Let's set up an event listener for the 'ul' tag. Now, we already have click eventlisteners for 
// the 'li' tags, and 'ul' tag is the parent of those. Now, we'll notice the bubbling effect, ie.,
// First event of li tag triggers, which then triggers the event of ul tag, their parent. This 
// bubbling effect continues, till we run out of parent tags.

// ul.addEventListener('click', e => {      //? Commented out, now below the 'green' comment below
//     console.log('Event in UL');
// })

// Now, to stop this bubbling effect, we use the e.stopPropagation() method in 'ul' eventListener.

//! Now adding so many event listeners to each individual element, is not a good idea at all.
//! These event listeners are very costly (time complexity, etc.), and very tedious to set up for
//! each element.
//! Also, these aren't even added to the 'new' li tags created using the button click eventListener.
//! So, this technique, isn't even all that useful

//* Instead, we'll attach a single event-listener to the 'ul' tag.

ul.addEventListener('click', e => {
    // console.log(e.target);  // This prints the element, that was initially clicked (the li tag)
    if ( e.target.tagName == 'LI' ) // This is a property (You can console.log(e) and check)
        e.target.remove();
})

