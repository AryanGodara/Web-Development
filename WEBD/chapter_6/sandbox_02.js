// //? Getting and Setting Attributes

// const link = document.querySelector('a');

// console.log(link.getAttribute('href')); // We want to 'get' the 'href' attribute of 'link'.
// link.setAttribute('href', 'https://www.youtube.com'); // take the 'href', and set it to 'yt.com'.
// link.innerText = 'Now points to youtube.com';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));    // The class here is named: 'error'
// mssg.setAttribute('class', 'success');  // Change the value of 'class' from 'error' to 'success'.
// mssg.setAttribute('style','color: green');  //* In this case, JS just creates a new attribute.


// //? Changing CSS styles
// //Now, the h1 tag (The DOM), is already set to 'orange' in the HTML file
// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin: 50px;');
// //! Now, this has given the border, but completely removed the previously applied CSS settings to h1
// //! So, it is no longer orange is color.
// //* Now, we don't want to override, but add to the settings

// console.log(title.style);   // 'style' is a property of the 'title' tag.

// title.style.margin = '50px';
// title.style.color = 'crimson';  // Color already existed, so this particular property gets overriden

// title.style.fontSize = '60px';

// //* We don't need to remember all the properties, just use IDE, or console.log title.style

// title.style.margin = '';    //? Set it to empty string, to remove the property



//************ */ Uncomment the Above section, to view the effects on the webpage/



// //? Adding and removing classes
// const content = document.querySelector('p');
// console.log(content.classList);

// content.classList.add('error');
// console.log(content.classList);

// content.classList.remove('error');
// console.log(content.classList);

// content.classList.add('success');
// console.log(content.classList);

// // Now, i've added more document p tags, so we have to change all of them

// const paras = document.querySelectorAll('p');

// paras.forEach( p => {
//     if ( p.textContent.includes('error') ){
//         p.classList.add('error');
//     }
//     if ( p.innerText.includes('success') ){
//         p.classList.add('error');
//     }
// })
// //! 'innerText' only returns the 'visible text', 'textContent' returns 'ALL the text'.

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// // If it has the class, it gets turned off. And if it didn't have the class, it gets added



//************ */ Uncomment the Above section, to view the effects on the webpage/



//? Parents, Children and Sibling
const article = document.querySelector('article');

console.log(article);       //* Shows the Tag
console.log(article.children);  //* Shows the HTMLCollection containing the children tags

console.log(Array.from(article.children));   // Make an array, from HTML collection
//* The above line is not destructive, the array doesn't affect the original object
// console.log(article.children);  // Still remains an HTML collection

Array.from(article.children).forEach( (child) => {
    child.classList.add('article-element'); // Add this class to each of the children
})

const title = document.querySelector('h2');

console.log(title.parentElement);   // Prints 'article', the parent of the first h2 tag.
console.log(title.parentElement.parentElement);     // Prints the 'body' tag
console.log(title.parentElement.parentElement.parentElement);   // Prints the 'html' tag

console.log(title.nextElementSibling);
console.log(title.nextElementSibling.nextElementSibling);
console.log(title.previousElementSibling);
console.log(title.nextElementSibling.previousElementSibling);

//* Chaining
console.log(title.nextElementSibling.parentElement.children);
// Works perfectly