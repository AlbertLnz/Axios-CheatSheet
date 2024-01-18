export async function headerInsert_GET(){

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1", {
        headers: {
            'Aaaaaaaaaaaalbert': "ABCDEF"
        }
    })

    console.log(res)
}