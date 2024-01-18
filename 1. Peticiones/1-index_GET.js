// · GET --> Example from: https://jsonplaceholder.typicode.com/

export function getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data)) // accessing the data directly
    .catch(err => console.log(err))
}

export function getUsers2(){
    axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

// Using 'export' to export the functions with ECMA JS