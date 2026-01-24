
// Create a Fruit Serach App from the FreeCodeCamp projects

import { useState, useEffect } from "react";
    
const searchContainer  = {
  textAlign: 'center',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
}

const searchInput = {
    padding: '10px',
    width: '80%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px'
}

const resultItem = {
    padding: '5px',
    borderBottom: '1px solid #ddd'
}

function FruitComponent(){
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([]) // empty array

    function handleSubmit(e){
        e.preventDefault()
    }

    useEffect(() => {

        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const timeId = setTimeout(async() => {
            try{
                const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`)
                const data = await response.json()
                // pass the name property of the data to the setResults function
                setResults(data.map(fruitNames => fruitNames.name))
            }catch(error){
                console.error("Error fetching data:", error)
            }
        }, 700)  

        return () => clearTimeout(timeId)

    }, [query])

    return (
        <>
        <br /> <br />
        <h2>Fruit Search App</h2>
        <br />
            <div style={searchContainer}>
                <form action="" id="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="search-input">Search for fruits:</label>
                    <input type="search" value={query} style={searchInput} onChange={(e) => setQuery(e.target.value)} />
                </form>
                <div style={{textAlign: 'left', maxHeight: '150px', overflowY: 'auto'}}>
                    {results.length > 0 ? (results.map(item => (<p key={item} style={resultItem}>{item}</p>))) : (<p>No results found</p>)}
                </div>
            </div>
        
        </>
    )
}

export {FruitComponent}