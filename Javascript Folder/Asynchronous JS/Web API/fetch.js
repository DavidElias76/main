
// // fetch API allows web apps to make network requests typically to retrieve and send data to the server
// // The api provied the fetch api to make requests
// // we use the HTTP METHODS to eg GET, POST, PUT, DELETE
// // A Promise is an object that represents the eventual comapletion or failure of asynchronous process and its value
// // The value of a promise is not known when the promise is created. It’s only known when the asynchronous process is completed

// // THE GET METHOD
// // used to retrive data and it is the defualt method of fetch ()
// // the response coming from the fetch api is the promise

// fetch('https://api.example.com/data')
//     .then(Response => Response.json()) // convert the responce to json format
//     .then(data => console.log(data));


// // THE POST METHOD
// // used to send data to the server to create a new resuorce
// // headers are extra inforamtion  sent with the request to the server on how to interpret the data


// fetch('https://api.example.com/data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json', // Content-Type header specifies the type of data (file format) being sent to the server. It tells the server how to interpret the request body.
//     },
//     body: JSON.stringify({
//         name: 'John Doe',
//         email: 'john@example.com'
//     })

// })

// // THE PUT METHOD
// // it is used to update the resources of a server
// // example

// fetch('https://api.example.com/Users/45', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         name: 'John Doe',
//         email: 'john@example.com'
//     })
// })


// // THE DELET METHOD
// // This is used to delete a resource from the server

// fetch('https://api.example.com/Users/45', {
//     method: 'DELETE'
// })
// // we are deleting the url ID at the end of the url to identify the data whihc nedds to be deleted
// // The 45 is a uniques ID  to identify the data we are trying to update

// FROM BRO CODE
// The reponse will be okay if the status is within range

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.id)) // to acess the id property of the object which will be 25
    // .catch(error => console.error(error))


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        return response.json()
    })
    .then(data => console.log(data)) // to acess the id property of the object which will be 25
    .catch(error => console.error(error))

// fetch data using the async function

console.log("Using the async function to fecth data")

async function fetchData(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/typhlosion')

        if(!response.ok){
            throw new Error("Could not fecth resource")
        }
        const data =  await response.json()
        console.log(data)

    }catch(error){
        console.error(error);
    }
}


// EXAMPLE OF INTERACTING WITH THE API

const pokemonBtn = document.getElementById("pokemonBtn")

// add event lister to the button element

pokemonBtn.addEventListener('click', getPokemonImage)

async function getPokemonImage() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch the reponse");
        }

        console.log(response)

        const data = await response.json(); // convert to json to access the properties pf the object
        console.log(data.name);

        // get the image of pokemeon
        const pokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById("pokemonSprite")

        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = "block"

    }catch(error){
        console.error(error)
    }
}



