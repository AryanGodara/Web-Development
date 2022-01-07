//? Query Selector

// Store our reference to our variable in some kind of element
const para1 = document.querySelector('p');   // Hover on querySelector for info
console.log(para1);

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
var paras = document.querySelectorAll('p');   // Stores all of the paragraphs
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




//? Adding and Changing Page Content

const para = document.querySelector('p');     // Already defined earlier

console.log(para.innerText);
//! .innerText is a 'property', not a method. So, we don't use (). {Check django for 'property'}

para.innerText = 'Ninjas are awesome';
console.log(para.innerText);
para.innerText += '!!!';
console.log(para.innerText);
console.log('\n');

paras = document.querySelectorAll('p');     // Already defined earlier
// Now, we can use 'forEach' to cycle through all the elements of a 'NodeList'.

paras.forEach( para_element_var => {
    console.log(para_element_var.innerText);
    para_element_var.innerText += ' new text';
    console.log(para_element_var.innerText);
})

const content1 = document.querySelector('.content');    // Query the 'div'
console.log(content1.innerHTML);
content1.innerHTML = '<h2>This is a new Heading2 Tag </H2><p>And this is a paragraph</p>';
//! Use `` instead, to write multi-line strings.

content1.innerHTML += ' just appended this lol.'

console.log(content1.innerHTML);
console.log(content1.innerHTML);

const people = [ 'mario', 'luigi', 'yoshi' ];

people.forEach( person => {
    content1.innerHTML += `<li>${person}</li>`
})