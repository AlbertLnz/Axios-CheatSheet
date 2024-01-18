export async function asyncAwaitSimple(){
    const res = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
    )
    console.log(res)
}

export async function asyncAwaitSynchronous(){ // <--- MALPRACTICE HABIT 
    const usersURL = 'https://jsonplaceholder.typicode.com/users'
    const postsURL = 'https://jsonplaceholder.typicode.com/posts'

    const resUsers = await axios.get(usersURL)
    const postUsers = await axios.get(postsURL)

    console.log(resUsers, postUsers)
}

export async function asyncAwaitAsynchronous(){ // <--- CORRECT HABIT 
    const usersURL = 'https://jsonplaceholder.typicode.com/users'
    const postsURL = 'https://jsonplaceholder.typicode.com/posts'

    const res = await Promise.all([axios.get(usersURL), axios.get(postsURL)])
    console.log(res)
    console.log(res[0]) // === usersURL
    console.log(res[1]) // === postsURL
    console.log(res[0].data) // === usersURL.data
    console.log(res[1].data) // === postsURL.data
}

export async function asyncAwaitAsynchronousPromises(){ // <--- USING PROMISES (CORRECT HABIT)
    const usersURL = 'https://jsonplaceholder.typicode.com/users'
    const postsURL = 'https://jsonplaceholder.typicode.com/posts'

    Promise.all([axios.get(usersURL), axios.get(postsURL)])
    .then(res => console.log(res))
    .catch(err => console.error(err))
}
