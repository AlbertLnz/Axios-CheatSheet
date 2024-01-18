export async function asyncAwaitSimple(){
    const res = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
    )
    console.log(res)
}