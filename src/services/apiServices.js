

export const AuthServices = {
    handleLogin : (data) => {
    fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(value => value.json())
        .then(value => console.log(value))
},



}

