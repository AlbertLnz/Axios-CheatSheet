export async function timeOutResponse80(){

    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1', {
        timeout: 80
    })
    console.log(res)

    // Maximum time to complete the request -> 80ms --> If it exceeds: { message: "timeout of 80ms exceeded" }
    // To see how long the request takes, go to: Network -> Select the response (xhr) -> Timing -> Bolded Time

}