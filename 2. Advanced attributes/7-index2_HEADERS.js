export async function headerInsert_GET(){

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1", {
        headers: {
            'Aaaaaaaaaaaalbert': "ABCDEF"
        }
    })

    console.log(res)
}

export async function headerInsert_POST(){

    const data = {user: "Pepe123"}

    const res = await axios.post("https://jsonplaceholder.typicode.com/users", data, {
        headers: {
            "Peeeeeeeeeepe": "12345678"
        }
    })
    console.log(res)
}