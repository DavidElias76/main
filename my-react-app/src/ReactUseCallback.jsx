
// The useCallback function is used to memorize a function
// Memoizing a function means caching the result of a function so that it does not need to be recalculated.

// The useCallback function only re-executes when one of its dependencies changes value.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// By using the useCallback hook, we can memoize the functions and only recreate them when their dependencies change.

// NOTE: The function get called back when needed or unless the value changes y adding a dependancy 

// Without the useCllback function

import { useCallback, useEffect, useState } from "react";
// import React from "react";

// // a child component that receves a function prop
// const Button = React.memo(({ onClick, text}) => {
//     alert(`Child  ${text} button rendered`)
//     return <button onClick={onClick}>{text}</button>;
// }) 

// // Parent component without useCallback
// function WithoutCallbackExample(){
//     const [count1, setCount1] = useState(0)
//     const [count2, setCount2] = useState(0)

//     // This functions (handleClick1, handleClick2 and the alert ) is recreated or recalled on every render - to stop this add a useCallback function to prevent that
//     const handleClick1 = () => {
//          setCount1( c => c + 1);
//     }

//     const handleClick2 = () => {
//          setCount2( c => c + 1);
//     }

// The solution is to use the useCallback function

// These functions are memoized and only recreated when dependencies change
//   const handleClick1 = useCallback(() => {
//     setCount1(count1 + 1);
//   }, [count1]);

//   const handleClick2 = useCallback(() => {
//     setCount2(count2 + 1);
//   }, [count2]);


//     alert("Parent rendered");

//      return (
//         <div>
//             <h2>Without useCallback:</h2>
//             <p>Count 1: {count1}</p>
//             <p>Count 2: {count2}</p>
//             <Button onClick={handleClick1} text="Button 1" />
//             <Button onClick={handleClick2} text="Button 2" />
//         </div>
//   );
// }


// websimplifiedDev example
function DevSimplified() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // This function get called back eveytime the component get rendered in the web page - it get to run everytime when not wanted
    // const getItems = () => {
    //     return [number, number + 1, number + 2]
    // }

    // To sole this, use the useCallback function and it will ba called when needed to or unless the value changes
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number]) // the function get called everytime the dependeny get changed


    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <>
            <h2>An Example of the useCallback Function</h2>

            <div style={theme}>
                <input style={{padding: "10px"}}
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                />

                {/* when we click the toggle button it also calls the getItems function and it is not supposed to do that */}
                <button onClick={() => setDark(prev => !prev)}>
                    Toggle Button
                </button>

                <ListComponent getItems={getItems} />
            </div>
        </>
    )
}

function ListComponent({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log("Updating Items")
    }, [getItems])

    return (
        <>
            {items.map(item => (
                <div style={{padding: '10px'}} key={item}>{item}</div>
            ))}
        </>
    )
}


export {DevSimplified, ListComponent}
