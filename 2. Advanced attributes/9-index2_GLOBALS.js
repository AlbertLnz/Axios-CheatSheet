export async function globalHeaderForAllRequests(){

    axios.defaults.headers.common['Albertlnzzzzzzzzzzzzzzzzz'] = "Hello World!" // Way to set a header globally for all requests! (axios.defaults)

    const resUsers = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(resUsers)

    const resPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(resPosts)
}
