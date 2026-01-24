
// React Transitions 
// useTransitions Hooks - allows you react app to be more responsive during heavy updates. used when you updates have immediately critical 
// It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.

// The useTransition return two items
    // isPending - tell you if the transition is active
    // startTransition - function that marks updates as transitions

// NOTE: It is only used when dealing with performance related issues

import { useState, useTransition } from "react";

function SearchBar(){
    const [text, setText] = useState("") // the text is declared empty 
    const [results, setResults] = useState('')
    const [isPending, startTransitions] = useTransition()

    // function to update the text variable
    function HandleChange(e){
        // Urgent: Update input right away
        setText(e.target.value); // get the value of the in the input field - this will be renderd immediately 

        // non urgent Updates - it will only run after the input value has been set to the function and rendered on the page 
        startTransitions(() => {
            setResults(e.target.value)
        })
    }

    return (
        <>
            <div>
                <h2>React useTransition Hook</h2>
                <input type="text" value={text} onChange={HandleChange} />
                {isPending ? <p>Loading...</p> : <p>Search resulst for: {results}</p>}
            </div>
        </>
    )
}

// IN REAL WORLD EXMAPLE

function SearchResults({query}){
    // Simulate slow search results
  const items = []

  if(query){
    for (let i = 0; i < 1000; i++) {
        items.push(<li key={i}>Result for {query} - {i}</li>); // push the list items into the array
    }
  }

  return <li>{items}</li>
}

function Transition_2(){
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
    // Urgent: Update input field
    setInput(e.target.value);
    
    // Non-urgent: Update search results
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <>
        <div>
        <input type="text" value={input} onChange={handleChange} placeholder="Type to search..." />
        {isPending && <p>Loading results...</p>}
        <SearchResults query={query} /> {/*so query initila value is empty and when the input value is entered it loops it to the serach results function */}
    </div>
    </>
  )
}

export {SearchBar}