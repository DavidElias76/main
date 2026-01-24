
// React Custom Hooks
// You can make your own Hooks!
// When you have components that can be used by multiple components, we can extract that component into a custom Hook.

// NOTE: Custom Hooks start with "use". Example: useFetch.

import { useEffect, useState } from "react";
// import { Form } from "react-router-dom";

// Build a Hook
// First, let us make an example without a custom Hook.

// without a Custom Hook

const HomeComponent = () => {
    const [data, setData] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
         .then(res => res.json())
         .then(data => setData(data))
    }, []) // fetch the data every render

    return (
        <>
            { data && data.map((item) => {
                return <p key = {item.id}>{item}</p>
            })}
        </>
    )
}

// With a Custom Hook

// the logic fetch data may also be needed by other component, so we will turn it inot a custome hook by creating a file useFetch.js

// Now we can reuse this custom Hook in any component to fetch data from any URL.
import useFetch from "./useFetch";

function HomeComponent2(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos") // get the data only from the function
    
    return (
        <>
        {data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}


export {HomeComponent, HomeComponent2}
