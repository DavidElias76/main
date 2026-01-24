
// Hooks allow functions to have access to state and other React features without using classes.
// They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
// Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

// Here we are using the useState Hook to keep track of the application state.

// NB: Look at the form.jsx for more information about hooks 

import { useState } from "react";

function ReactHooks(){
    const [color, setColor] = useState("") // the color varible is empty by default 

    function handleChange(value){
        setColor(value)
    }

    return(
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => handleChange('blue')}>Blue</button>
            <button type="button" onClick={() => handleChange('red')}>Red</button>
            <button type="button" onClick={() => handleChange('pink')}>Pink</button>
            <button type="button" onClick={() => handleChange('green')}>Green</button>  
        </>
    )
}


function FavouriteColor (){
    const [color, setColor] = useState("red") // color variable is the initial state 

    function handleChange(value){
        setColor(value)
    }
    return (
        <>
            <h2>The favourite color is {color}</h2>
            <button onClick={() => handleChange('blue')}></button> 
        </>
    )
}


// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

// function MyCar() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
//     </>
//   )
// }

//  Or we can just use one state and include an object instead!

// function MyCar() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   )
// }


// Updating Objects and Arrays in State

function MyCar(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })

    function UpdateColor(){
       setCar(previousState => {
        return { ...previousState, color: "blue"} // update the color property from red to blue 
       })
    }

    return (
        <>
            <h2>The original state of the object</h2>
            {/* convert the object into an array - the value get displayed without json.stringify */}
            <ul>
                {Object.entries(car).map(([key, value]) => {
                    return <li key={key}>{key}: {typeof value === 'object' ? JSON.stringify(value) : value}</li>
                })}
            </ul>
            <button onClick={UpdateColor} style={{padding: "20px", color: "green"}}>ChangeColor</button>
        </>
    )
}

export {ReactHooks, MyCar}


