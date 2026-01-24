
// The useEffect Hook allows you to perform side effects in your components / useEffect runs side effects after a render..
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// The useeffect is a asynchronous which means it runs after the DOM has been painted. 

// NOTE: Always add a cleanup when using the useeffect hook 

import { useState, useEffect } from 'react';

// Example whe using the timer function
function Timer(){

    const [count, setCount] = useState(0)

    // this function will count after every 1000 milliseconds / 1 seconds 
    useEffect(() => {
        //Runs on every render
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })

    return (
        <>
            <h2>I've counted {count}</h2>
        </>
    )
}
// The Empty Bracket

// Add an empty bracket to only run on the first render
function Timer2(){

    const [count, setCount] = useState(0)

    // add a empty backet on the second argument on useeffect 
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    }, []) // this is dependacy array and it will make the only render once and display 1 

    return (
        <>
            <p>This will count only once</p>
            <h2>I have counted {count} Times</h2>
        </>
    )
}

// Dependecy 

// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
// If there are multiple dependencies, they should be included in the useEffect dependency array.
function Counter(){
    
    const [count, setCounter] = useState(0)
    const [calculation, setCalculation] = useState(0); // depends on the count

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here - The effect runs only when count changes - Without it → effect would run after every render

    function ClickCounter(){
        setCounter(c => c + 1) // we use c because it is a safe way to update state when the new value depends on the old value
    }

    return (<>
        <h2>Count : {count}</h2>
        <h1>+</h1>
        <h2>The calculation is: {calculation}</h2>
        <button onClick={ClickCounter} style={{padding:"10px", color: "white", marginBottom: "10px", backgroundColor: "green"}}>Calculate</button>
    </>)
}


// the Effect Cleanup - used to clear timeout functions to reduce memeory leaks

// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
// We do this by including a return function at the end of the useEffect Hook.

function CounterClear(){
    const [count, setCounter] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => {
           setCounter((c) => c + 1) 

           return () => clearTimeout(timer) // this function clears out the timer after rendering  - always add a cleanup of you code when using the useeffect 
           
        }, 1000);
    }, []) // only runs after the render

    return (
        <h2>I've rendered {count} times!</h2>
    )
}

function FetchData(){
    const [resourceType, setResourceType] = useState('')
    const [items, setItems] = useState([])

    // the full url code 'https://jsonplaceholder.typicode.com/todos/1'

    // Add a function to fetch the data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/${resourceType}') // set the url type 
            .then(response => response.json())
            .then(data => setItems(data)) // set the data to setItems function
    })

    return (
        <>
        <br /> <br />
        <h2>Web Dev simplifies example</h2>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Posts</button>
            <button onClick={() => setResourceType('comments')}>Posts</button>
            <h2>{resourceType}</h2>
            {items.map(item => <prev>{JSON.stringify(item)}</prev>)} {/* convert the josn file to strings */}
        </>)
}


function InnerWidth(){
    const [InnerWidth, setInnerWidth] = useState(window.innerWidth)

    function handleWidth(){
        setInnerWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWidth) // call the event listener to call back the function 

        // remove the event listener
        return () => window.removeEventListener('resize', handleWidth) // using the remove event listener fro cleanup
    }, [])

    return (
        <> <div>{innerWidth}</div> </>
    )
}

export {Timer, Timer2, Counter, CounterClear}