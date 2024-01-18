export async function withoutHandlingTheError(){

    const resPosts = await axios.get("https://jsonplaceholder.typicode.com/postsXXXXX") // incorrect URL
    console.log(resPosts)

}