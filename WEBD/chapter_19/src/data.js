const users = [
    { name: 'mario', premium: true },
    { name: 'luigi', premium: false },
    { name: 'yoshi', premium: true },
    { name: 'toadd', premium: true },
    { name: 'peach', premium: false }
];

// export const getPremUsers = users => {
//     return users.filter ( user => user.premium == true ) ; //Only retain the premium users
// };

// export default users;   // Now, users is the default export value //?(there can only be one)


//TODO: Export these in an alternate way

const getPremUsers = users => {
    return users.filter ( user => user.premium == true ) ; //Only retain the premium users
};

export { getPremUsers, users as default };