
// Debouncing is a programming technique that limits how often a function runs. 
// It works by waiting until a user stops performing an action for a specified period of time before executing the function. 
// For example, in a search box, instead of making an API call for every keystroke, debouncing waits until the user pauses typing for, say, 500 milliseconds.

// NOTE: This is a custom Hook and it depends on the compoenet that used it

import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // the delay will be in milliseconds 

    return () => {
      clearTimeout(handler);  // clear timeout 
    };
  }, [value, delay]); // will run and change depending on the value and the delay 

  return debouncedValue;
}

// When calling this function in te component, it will be passed with a argument according to the parameters (value, delay) 

// Example when using the custom Hooks

// Footballer is custom Hook 
const footballers = [
  'Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr',
  'Kylian Mbappe', 'Mohamed Salah', 'Sadio Mane',
  'Kevin De Bruyne', 'Robert Lewandowski', 'Harry Kane',
  'Sergio Ramos', 'Virgil van Dijk', 'Alisson Becker', 
  'Joshua Kimmich', 'Manuel Neuer', 'Karim Benzema', 
  'Thibaut Courtois', 'Eden Hazard', 'Raheem Sterling',
  'Bruno Fernandes', 'Trent Alexander-Arnold', 'Son Heung-min',
  'Pierre-Emerick Aubameyang','Sergio Aguero', 'Luis Suarez', 
  'Luka Modric', 'Casemiro', 'Frenkie de Jong', 'Gerard Pique',
  'Marc-Andre ter Stegen', 'Keylor Navas', 'Angel Di Maria', 
  "N'Golo Kante", 'Kai Havertz', 'Timo Werner', 'Hakim Ziyech', 
  'Christian Pulisic', 'Mason Mount', 'Olivier Giroud', 'Tammy Abraham', 
  'Kepa Arrizabalaga', 'Ben Chilwell', 'Thiago Silva', 'Kurt Zouma', 
  'John Terry', 'Didier Drogba', 'Frank Lampard', 'Ashley Cole', 'Petr Cech',
];

function FootBallSearch (){
    const [query, setQuery] = useState("")
    // call the useDebouncer custom hook and pass the relevant arguments 
     const debouncedQuery = useDebounce(query, 1000); // Start searching 1 second after the user stops typing

     useEffect(() => {
        if(debouncedQuery){
            const results = footballers.filter(footballer => {
                footballer.toLowerCase().includes(debouncedQuery.toLowerCase())
            })
            console.log("Search results:", results);
        }else{
            console.log("Search results: []");
        }
     }, [debouncedQuery])

     return (
        <>
            <h1 style={{ textAlign: "center" }}>Footballer Search App</h1>
            <div style={{ textAlign: "center" }}>
                <input
                style={{ padding: "0.5rem", width: "30%" }}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a footballer..."
                />
            </div>
        </>
  );
}


export { FootBallSearch };