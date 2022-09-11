function Post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postRip(data))
}

function postRip(posts){
    const container = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML=`
         <h5>User-${post.userId}</h5>
         <h4>Post:${post.title}</h4>
         <p>post Description: ${post.body}</p>
        `
        container.appendChild(div);
    }
}