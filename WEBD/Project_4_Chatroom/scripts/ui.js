//? Render chat templates to the DOM
//? Clear the list of chats (when the room changes)

class ChatUI {
    constructor (list) {
        this.list = list;
    }

    //? 'clear' method removes everything in the chatlist, this is useful, when we're changing the
    //? room, and want to only display the messages inside that room
    clear () {
        this.list.innerHTML = '';   // Clear the html in the current list
    }

    //? 'render' method is responsible for creating an HTML snippet/template for each chat document
    //? we get back, and rendering them to the DOM.
    render (data) {     // 'data' is a single chat object

        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true},         // Adds 'ago' at the end
        )

        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${when}</div>
        </li>
        `;

    this    .list.innerHTML += html ;     // Append the new 'message' to the DOM
    }
};