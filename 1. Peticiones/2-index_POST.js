// · POST --> Examples from: https://reqres.in

export function createUser2(){
    axios({
        url: "https://reqres.in/api/register",
        method: "POST",
        data:{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

export function createUser3(){
    axios.post("https://reqres.in/api/register", {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
}