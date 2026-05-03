
// import axios from 'axios'
import { useState, useEffect } from 'react'

function DisplayData(){

    const [fileContent, setFileContent] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/') // requesting the home directory from the bac-end and send the file 
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.text() // convert the data into text format 
            })
            .then(data => {
                setFileContent(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div style={{background: 'grey', width: '100%', minHeight: '100vh', padding: '20px'}}>
                <h2 style={{fontSize: '24px', color: 'whitesmoke'}}>File Contents from Backend</h2>
                
                {loading && <p style={{color: 'whitesmoke'}}>Loading file contents...</p>}
                
                {error && <p style={{color: 'red'}}>Error: {error}</p>}
                
                {fileContent && (
                    <pre style={{background: '#333', color: '#0f0', padding: '15px', borderRadius: '5px', overflowX: 'auto'}}>
                        {fileContent}
                    </pre>
                )}
            </div>
        </>
    )
}

export default DisplayData