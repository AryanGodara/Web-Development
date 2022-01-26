import {styleBody, addTitle, contact} from './dom';
import users, {getPremUsers} from './data'
    //? Since there's only 1 default value, we can name it anything, 'users' to 'anything_we_want'
    //? And we don't need to put it in curly braces either: {users} ><-- , users <--

console.log('index file');
styleBody();
addTitle('test');
console.log(contact);

const premusers = getPremUsers(users);
console.log(premusers)

console.log(users);