const posts = [ 
    { title: 'Post One' , body: 'This is post one' },
    { title: 'Post Two' , body: 'This is post two' }
];

function getPosts () {
    setTimeout ( () => {
    // setInterval ( () => {
        let output = '';
        
        posts.forEach( (post,index) => {
            output += `<li>The ${index+1} post is called : ${post.title}</li>`;
        });
        document.body.innerHTML += output;
    } , 1000 )
};

function createPost (post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000 )
}

getPosts();
createPost({title: 'Post Three' , body: 'This is post three'} , getPosts);
