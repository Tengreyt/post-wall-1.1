const URL = 'https://7c1aebadbca19d81.mokky.dev';
// https://7c1aebadbca19d81.mokky.dev/post-card

async function getPosts() {
    const response = await fetch(`${URL}/post-card`)
    const posts = await response.json()
    return posts
}

async function getPost(id) {
    const response = await fetch(`${URL}/post-card/${id}`)
    const post = await response.json()
    return post
}

async function createPost(post) {
    await fetch(`${URL}/post-card`, {
        method:'POST',
        body:JSON.stringify(post),
        headers:{
             'Content-Type': 'application/json'
        },
    });
}

export {
    getPost,
    getPosts,
    createPost,
}