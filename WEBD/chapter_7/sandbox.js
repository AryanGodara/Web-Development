//? Submit Events


const usernamepattern = /^[a-zA-z]{6,12}$/;     //* REGEX PATTERN


const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');   // Query by 'id'
//* But, we don't need to create a separate identifier for the 'input', when we've already created
//* one for the form.

//! The default action on 'submit' event is 'Page Refresh'.

// form.addEventListener('submit' , (e) => {
//     e.preventDefault(); // Prevents the default item of an event (refresh in this case)
//     // console.log(username.value);
//     //* Now, we'll do this w/o 'username'
//     console.log(form.username.value);   // Can be chained using the 'id' or 'name' of tag.
// });


//? Testing Regular Expressions (Regex)
const usernameblabla = 'shaunp';
const patternblabla = /^[a-z]{6,}$/;

let resultbalbla = patternblabla.test(usernameblabla);
console.log(resultbalbla);



//? Basic Form Validation :-

const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    //* Validation
    const username = form.username.value;

    if ( usernamepattern.test(username) )
        feedback.textContent = ('Username is valid :)');
    else
        feedback.textContent = ('Username is invalid :(');
})


//? Keyboard Events (offer user some live feedback when someone is typing)

//* Live Feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value); //! Both return the same thing

    if ( usernamepattern.test(e.target.value) )
        form.username.setAttribute('class','success');
    else
        form.username.setAttribute('class','error');
});