export async function interceptingConfiguration(){

    axios.interceptors.request.use(function (config){
        console.log(config) // Here I can see Axios request information
        return config
    })

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log(res)
}

export async function interceptingConfiguration_ChangeURL(){

    axios.interceptors.request.use(function (config){
        console.log(config)
        config.url = 'https://jsonplaceholder.typicode.com/posts/1'// I can change the URL
        return config
    })

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log(res)
}

export async function interceptingConfiguration_AddNewElement(){

    axios.interceptors.request.use(function (config){
        console.log(config)
        config.headers['Authorizationnn!'] = `Bearer XYZ123` // I can add new elements to configuration (headers have a better way to be inserted!)
        return config
    })

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log(res)
}