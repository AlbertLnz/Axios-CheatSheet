export async function instance_BaseUrl(){

    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    })
    
    const resUsers = await axiosInstance.get("/users/1")
    console.log(resUsers)

    const resPosts = await axiosInstance.get("/posts/1")
    console.log(resPosts)

    const resComments = await axiosInstance.get("/comments/1")
    console.log(resComments)
}