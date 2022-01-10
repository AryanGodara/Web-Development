const addForm = document.querySelector('.add');

const list = document.querySelector('.todos');  // The 'ul' for the todo items has a class 'todo'

const search = document.querySelector('.search input'); // The form for 'search input' has the class 'search'. And we want 

const searchBox = document.querySelector('.search');

//? It will generate a new template for a todo, and inject it into the block(This is equal to a func)
const generateTemplate = todo => {

        //* this way, it's better to insert html snippets into JS code, using 'template strings'
        //TODO: The html below, is the template of one of the 'todo-list "items"'
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    // Append the above html, to the list
    list.innerHTML += html ;    // Now, it has one new li tag in the list
}

//? Submit a new todo
addForm.addEventListener( 'submit' , e => {
    e.preventDefault(); // Prevent the page form reloading on 'submit' event

    const todo = addForm.add.value.trim().toLowerCase();
    // addform has a child tag for submit text, w/ name='add
    //* Trim function removes any whitespaces before and after the string characters.
    console.log(todo);

    if ( todo.length )  // Only works if there is some value, entered in the todo list
        generateTemplate(todo);
});


//? Delete todos 

list.addEventListener('click' , e => {
    // Now, we can't just click anywhere.
    // So, we check if the class of the 'tag or element' that we clicked on was 'delete'
    // We used this class for the trash can icon
    if ( e.target.classList.contains('delete') )    // Continue, only if we clicked on the trash can
    {
        // Now in this case, e is the trashcan, and its parent, will be the li tag, for that 'todo task'
        e.target.parentElement.remove();   // So, we remove its parent.
    }
    // Else, we do nothing, as the other areas aren't interactive right now
});


//? Search todos (keyup event-chapter_7)

    //? Filters the correct todos from the list of todos.
const filter_todos = term => {
    
    // Now, we need access to the entire list of todos, and display only the 'filtered' ones
    //* That will be the 'list' var declared above

    // console.log(list.children); // This is an HTMLCollection, so convert it to array first
    // console.log(Array.from(list.children));

    //! Now, we filter out the ones that 'DON't Match, and then add the display:none class to them
    //* This way , we only dsiplay the ones that match
    const filtered_todos = 
    
        Array.from(list.children)
        .filter( (todo) => {        // 'todo' is the array element, ie., the individual todo tag
            return !todo.textContent.toLowerCase().includes(term);    //! That don't include the search 'term'
        })
        .forEach( (todo) => {
            todo.classList.add('filtered');
        })
        //! Now, we've added a class 'filtered' to the classes that we don't want to display
        //* We can go into styles.css and add .filtered{display:none;} to make these invisible

        //? But, if they DO match, then we need to 'remove' this filtered tag also
        Array.from(list.children)
        .filter( (todo) => {        // 'todo' is the array element, ie., the individual todo tag
            return todo.textContent.toLowerCase().includes(term);    //! That don't include the search 'term'
        })
        .forEach( (todo) => {
            todo.classList.remove('filtered');
        })
};

search.addEventListener( 'keyup' , () => {      // 'keyup' is a type of event, like 'click' or 'submit'
    const term = search.value.trim().toLowerCase();   // This is the text currently, inside the search input tag.
    filter_todos(term);
});


//? If we don't want the page to refresh, when someone presses enter by mistake (in the search box)
searchBox.addEventListener( 'submit' , (e) => {
    e.preventDefault();
});