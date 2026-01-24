
// // webDevSimplified Example

// import { useState, useEffect } from "react"
import useLocalStorage from './useLocalStorage'

function WebDev(){
    const [name, setName] = useLocalStorage('name', () => '') // the same as the returned value of the uselocalstorage component / same as the value and the setValue 

    return (
        <>
            <h2>Web Dev Simplified Example - Custom Hooks</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}
export {WebDev}

// The useLocalStorage function runs after the page reloads and check if the value exist by passing the name as the key and the function as the initialValue
