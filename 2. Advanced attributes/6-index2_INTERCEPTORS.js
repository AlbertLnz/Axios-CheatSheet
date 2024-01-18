export async function interceptingConfiguration(){

    axios.interceptors.request.use(function (config){
        console.log(config) // Here I can see Axios request information
        return config
    })

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log(res)
}
