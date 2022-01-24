//? DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//? add a new chat
newChatForm.addEventListener ('submit', e=> {
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    if ( message )  // Check if the string isn't empty
        chatroom.addChat(message)
            .then( () => newChatForm.reset())
            .catch( err => console.log(err) );
            // 'addChat' is an async' function, so it returns a promise, so we use 'then' and 'catch'
    //! It doesn't matter that 'chatroom' is defined below this event listener, as by the time a
    //! user actually submits a form, after typing out a message, all of the JavaScript has already
    //! run. And so, chatroom already exists and is well-defined.
});

//? Update username
newNameForm.addEventListener('submit' , e => {
    e.preventDefault();

    // Update name via the chatroom class object
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);

    // reset the form now
    newNameForm.reset();

    // Show, then hide, the update message
    updateMssg.innerText = `Name updated to ${newName}`
    setTimeout( () => {
        updateMssg.innerText = '';
    },2000);
});


//? Update the chat room
// Event listerner is on the entire block, but this one if only when a 'button' is clicked
rooms.addEventListener('click', e => {
    if ( e.target.tagName === 'BUTTON' )
    {
        chatUI.clear(); // Clear the current html (the current messages)
        chatroom.updateRoom(e.target.getAttribute('id'));   // changes the room name
        chatroom.getChats( chat => {
            // update the UI
            chatUI.render(chat);
        })
    }
})


// check local storage for a username key:value pair
const username = localStorage.username ? localStorage.username : 'anon';

//? class instances
const chatUI = new ChatUI(chatList);

const chatroom = new Chatroom('general', username);

            // chatroom.addChat('hello everyone')           //! Added this 'static' message
            //     .then( () => console.log('chat added'))  //! everytime page was refreshed. This
            //     .catch( err => console.log(err) );       //! was only used as an example

//? get chats and render
chatroom.getChats( data => chatUI.render(data) );
    // getChats is in the Chatroom class in 'chat.js', we pass a callback function as an 
    // argument here, which is run, whenever there is a change in the database, such that
    // a new document is added in the 'books' collection.