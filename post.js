/*
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    for(const post of posts){
        console.log(post)
    }
}

loadPost();
*/

// post gulo site e show kora ---->

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        console.log(post);

        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4> User-${post.userId} </h4>
        <h5> Post title : ${post.title}</h5>
        <p> Post Descrription : ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();