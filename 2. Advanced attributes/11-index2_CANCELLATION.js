export async function cancellation_AbortController(){

    const controller = new AbortController() // Browser function
    
    axios.post("https://reqres.in/api/login", {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }, {
        signal: controller.signal
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))


    controller.abort() // Running this anywhere in the code, It will abort Promises that have a signal from this 'controller'! -> message: cancelled
}