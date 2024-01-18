export async function withoutHandlingTheError(){

    const resPosts = await axios.get("https://jsonplaceholder.typicode.com/postsXXXXX") // incorrect URL
    console.log(resPosts)

}

export async function handlingError_Catch(){

    // Option 1 to print one error:
    axios.get("https://jsonplaceholder.typicode.com/postsXXXXX")
    .then(res => console.log(res))
    .catch(err => console.error(err, err.response.status)) // In this backend, 'err.response.status' gives the HTTP Status Code

    // Option 2 to print various error:
    axios.get("https://jsonplaceholder.typicode.com/postsXXXXX")
    .then(res => console.log(res))
    .catch(err => {
        console.log(err)
        console.log(err.response)
        console.log(err.response.data)

        if(err.response.status === 404) console.log('ERROR 404: NOT FOUND!!')
    }) 

}