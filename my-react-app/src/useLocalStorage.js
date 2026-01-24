
// import { useEffect, useState } from "react";

// function getSavedValue(key, initialValue){
//     const savedValue = JSON.parse(localStorage.getItem(key)) // get the item and conver to localstorage
    
//     if(savedValue) return savedValue

//     // check if the initial value is a function
//     if(initialValue instanceof Function) return initialValue() // this returns true 

//     return initialValue
// }

// // the key and the value is going to be stored in local storage
// // The useLocalStorage function runs after the page reloads and check if the value exist by passing the name as the key and the function as the initialValue
// export default function UseLocalStorage(key, initialValue){

//     const [value, setValue] = useState(() => {
//         return getSavedValue(key, initialValue) // the 'name' key and the initialValue function get passed inside the getSavedValue 
//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value))
//     },[value]) // updates when the value chnages

//     return[value, setValue] // the return is this comonent is the same as the return of the websimplified usestate

// }