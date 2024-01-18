// · DELETE --> Example from: https://jsonplaceholder.typicode.com/

export function deleteUser(){
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(res => console.log(res))
    .catch((err) => console.error(err))
}
