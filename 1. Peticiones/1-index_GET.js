// · GET --> Example from: https://jsonplaceholder.typicode.com/

export function getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data)) // accessing the data directly
    .catch(err => console.log(err))
}

// Using 'export' to export the function with ECMA JS