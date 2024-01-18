// · PUT & PATCH --> Example from: https://jsonplaceholder.typicode.com/

// PUT -> It will update the entire object and will only return 'name' and 'username'
export function updateUser_PUT(){
    axios.put("https://jsonplaceholder.typicode.com/users/1", {
        name: "albert",
        username: "albertlnz"
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

// PATCH -> It will update only those elements that are passed and will return the entire object with the 'name' and 'username' values updated
export function updateUser_PATCH(){
    axios.patch("https://jsonplaceholder.typicode.com/users/1", {
        name: "albert",
        username: "albertlnz"
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}