export async function requestTransformResponse(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users", {
        transformResponse: axios.defaults.transformResponse.concat(data => {

            console.log(data) // === res.data <-- original data

            data = data.map((user) => { // <-- I modify the data of each user by adding a field (myCustomField)
                return{
                    ...user,
                    myCustomTitle: `${user.name} - ${user.email}`
                }
            })

            return data
        })
    })
    console.log(res)
}