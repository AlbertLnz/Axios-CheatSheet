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