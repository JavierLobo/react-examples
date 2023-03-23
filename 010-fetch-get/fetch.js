const urlRemote = 'https://jsonplaceholder.typicode.com/users'
// const urlLocal = 'localhost:8080/'

// fetch(urlRemote)
//     .then((response) => response.json())
//     .then(data => console.log(data))


// fetch(urlRemote, {
//     method: 'POST', // GET, POST, PUT, PATCH, DELETE
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
//     },
//     body: JSON.stringify({
//         name: 'Chancito feliz',
//         website: 'google.com'
//     })
// })
//     .then((response) => response.json())
//     .then(data => console.log(data))

//     fetch(urlRemote)
//     .then((response) => response.json())
//     .then(data => console.log(data))

const fn = async () => {
    const response = await fetch(urlRemote, {
        method: 'POST', // GET, POST, PUT, PATCH, DELETE
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
        },
        body: JSON.stringify({
            name: 'Chancito feliz',
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data);
}

fn()