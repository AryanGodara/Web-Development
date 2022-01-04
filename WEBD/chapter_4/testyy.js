// Get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = [ 'mario', 'luigi', 'ryu', 'shaun' ];

let html = ``;

const log_person = (person, i) => html += `<li style="color: orangered">The ${i+1}'th element is ${person} </li>` ;

people.forEach(log_person);

console.log(html);
ul.innerHTML = html ;