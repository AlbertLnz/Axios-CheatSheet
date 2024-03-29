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
        params:{
            _limit: 3 // === https://jsonplaceholder.typicode.com/users?_limit=3 <--- return 3 users instead of 10
        }
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

export function getUsers3(){
    axios.get("https://jsonplaceholder.typicode.com/users", { // .get is not necessary (default) but it's better to be descriptive!
        params:{
            _limit: 5
        }
    })
    .then((res) => { console.log(res) })
    .catch((err) => console.error(err))
}

// Using 'export' to export the functions with ECMA JS