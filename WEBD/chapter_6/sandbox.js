//? Query Selector

// Store our reference to our variable in some kind of element
const para = document.querySelector('p');   // Hover on querySelector for info
console.log(para);

// Now, if we want to select a particular tab, we can use its 'class name'
const para2 = document.querySelector('.error'); // Grabs the first tag w/ class 'error'
console.log(para2);

// Now, if we have a 'div' tag, with class name 'error'.
// We can't use 'div' or '.error', as both of those exist before the one we want to select
const para3 = document.querySelector('div.error');   // There is only one of this type
console.log(para3);


//* If we're unsure about the correct selector, simply go to inspect elements on the webpage.
//* Then, right click, and select 'copy selector' for the element of the page, that you want to
//* use querySelector on. This way, you don't have to remember everything. :)

const heading1 = document.querySelector('body > h1');
console.log(heading1);

// Now, if we want to grab mutliple elements?
const paras = document.querySelectorAll('p');   // Stores all of the paragraphs
console.log(paras); // paras is a NodeList, not any ordinary array
for ( let i = 0 ; i < paras.length ; i++ )
    console.log(paras[i]);

const errors = document.querySelectorAll('.error');         // Have to use '.' for classes
console.log(errors);

for ( i in errors )
    console.log(i, errors);

const titleselect = document.querySelector('#page-title');  // Have to use '#' for IDs
console.log(titleselect);
console.log('\n\n\n');


//? Other Ways to Query the DOM

// Get an element by ID         //! All IDs are unique
const title = document.getElementById('page-title')
console.log(title);

// Get an element by their class name
const errorselect = document.getElementsByClassName('error');
console.log(errorselect);   // errorselect is an 'HTMLCollection', different from a NodeList

// get elements by their tag name
const paraselect = document.getElementsByTagName('p');
console.log(paraselect);
const titselect = document.getElementsByTagName('title');
console.log(titselect); // Even if there is just one element, it's still stored in an HTMLCollection