// <------------user----------->

const elUsers = document.querySelector('.users');
const elUserTemplate = document.querySelector('.users__template').content;

const renderUsers = (users) => {
    const usersFragment = document.createDocumentFragment();
  users.forEach((user) => {
    const elUserItemTemplate = elUserTemplate.cloneNode(true);

    elUserItemTemplate.querySelector('.users__item-title').textContent = user.name;
    elUserItemTemplate.querySelector('.users__item-description').textContent = user.username;
    elUserItemTemplate.querySelector('.users__item-company').textContent = user.company.name;
    elUserItemTemplate.querySelector('.users__item-email').textContent = user.email;

    usersFragment.appendChild(elUserItemTemplate);
  });
  elUsers.appendChild(usersFragment);
}

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const result = await response.json();
        if (result) {
            renderUsers(result);
        }
    }catch(error) {
        console.log(error);
    }
}
getUsers();

// <------------/user----------->

// <---------------comments------------->

const elComments = document.querySelector('.comments');
const elCommentTemplate = document.querySelector('.comments__template').content;

const renderComments = (comments) => {
    const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const elcommentItemTemplate = elCommentTemplate.cloneNode(true);

    elcommentItemTemplate.querySelector('.comments__item-postId').textContent = comment.userId;
    elcommentItemTemplate.querySelector('.comments__item-id').textContent = comment.id;
    elcommentItemTemplate.querySelector('.comments__name').textContent = comment.id;
    elcommentItemTemplate.querySelector('.comments__item-email').textContent = comment.title;
    elcommentItemTemplate.querySelector('.comments__item-body').textContent = comment.body;

    commentsFragment.appendChild(elcommentItemTemplate);
  });
  elComments.appendChild(commentsFragment);
}

const getComments = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');

        const result = await response.json();
        if (result) {
            renderComments(result);
        }
    }catch(error) {
        console.log(error);
    }
}
getComments();

// <<<------------------/comments----------->

// <<<------------------posts-------------->

const elPosts = document.querySelector('.posts');
const elPostsTemplate = document.querySelector('.posts__template').content;

const renderPosts = (post) => {
    const postsFragment = document.createDocumentFragment();
  post.forEach((post) => {
    const elpostItemTemplate = elPostsTemplate.cloneNode(true);

    elPostsTemplate.querySelector('.posts__item-userId').textContent = post.userId;
    elPostsTemplate.querySelector('.posts__item-id').textContent = post.id;
    elPostsTemplate.querySelector('.posts__item-title').textContent = post.title;
    elPostsTemplate.querySelector('.posts__item-body').textContent = post.body;

    postsFragment.appendChild(elpostItemTemplate);
  });
  elPosts.appendChild(postsFragment);
}

const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const result = await response.json();
        if (result) {
            renderPosts(result);
        }
    }catch(error) {
        console.log(error);
    }
}
getPosts();

// <<<------------------/posts------------------->

 // <---------------panda------------------->

document.getElementById('getPandas').addEventListener('click', getPandas);
function getPandas(){
    fetch('https://www.omdbapi.com/?apikey=7e789dc5&s=panda')
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        let output = '<h2>Get panda</h2>'
        data.Search.forEach(panda => {
            output +=  `
            <ul> 
                <li>${panda.Title}</li>
                <li>${panda.Poster}</li>
                <li>${panda.Year}</li>
                <li>${panda.imdbID}</li>
                <li>${panda.Type}</li>
               
            </ul>
             `;
        });
        document.querySelector('.output').innerHTML = output;
    })
}

 // <---------------/panda------------------->

  // <---------------albums------------------->
const elAlbums = document.querySelector('.album');
const elAlbumsTemplate = document.querySelector('.albums__template').content;

const renderAlbums = (album) => {
    const albumsFragment = document.createDocumentFragment();
    album.forEach((album) => {
    const elAlbumItemTemplate = elAlbumsTemplate.cloneNode(true);
    

    elAlbumsTemplate.querySelector('.albums__item-userId').textContent = album.userId;
    elAlbumsTemplate.querySelector('.albums__item-id').textContent = album.id;
    elAlbumsTemplate.querySelector('.albums__item-title').textContent = album.title;

    albumsFragment.appendChild(elAlbumItemTemplate);
  });
    elAlbums.appendChild(albumsFragment);
}

const getAlbums = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');

        const result = await response.json();
        if (result) {
            renderAlbums(result);
        }
    }catch(error) {
        console.log(error);
    }
}
getAlbums();

  // <---------------/albums------------------->
