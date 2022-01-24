//? Adding new Chat Documents
//? Settings up a real-time listener to get new chats
//? Updating the username
//? Updating the room

// This class 'Chatrrom' is responsible for managing all the chatroom data
class Chatroom {
    // Construct a new Chatroom object
    constructor (room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');    // Storing a 'reference' to the 'chat' 'collection'
        this.unsub;
    }

    // Async function to 'add' a new 'chat/message' to the database
    async addChat (message) {
        // format a chat object
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        // save the chat object created above as chat document to the chats collection
        const response = await this.chats.add(chat);

        return response ;
    }

    // Real-time listerner, keeping an eye on the 'chats collection' in the firebase database
    getChats (callback) {
        this.unsub = this.chats
            .where('room', '==', this.room) // Quering, for message ONLY inside the current room
            .orderBy('created_at')
            .onSnapshot( snapshot => {
            snapshot.docChanges().forEach( change => {
                if ( change.type === 'added' ) {
                    // If a new message has been added, we'll need to 'update the UI'
                    callback(change.doc.data())
                }
            });
        });
    }

    updateName (username) {
        this.username = username;
            // We're basically updating the current class object's 'username' property
        localStorage.setItem('username', username);
            // We're storing the value of the username param in the local storage
    }

    updateRoom (room) {
        this.room = room ;
            // We're basically updating the current class object's 'room' property
        console.log('room is updated');
        if ( this.unsub )       //* We need to check if this is null or not
            this.unsub();   // Defined above inside 'getChats'
        //? So, we've updated the current room, and then, unsubscribed from changes to the 
        //? 'getChats()', which was subscribed to changes in the old/previous room
    }
}



                // //TODO: Emulate the user changing the room after being on the website for 3 seconds
                // setTimeout ( () => {
                    
                //     chatroom.updateRoom('gaming');
                //     chatroom.updateName('Yoshi');
                //     chatroom.getChats(data => {
                //         console.log(data);
                //     });

                //     chatroom.addChat('hello gamers');
                // },3000);