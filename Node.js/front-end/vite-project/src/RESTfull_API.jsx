
import axios from "axios"
import { useState, useEffect } from "react"

const BASE_URL = 'http://localhost:8080'

function RESTfull_API() {

    const [users, setUsers] = useState([])
    const [loading, setIsLoading] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const fetchUsers = async () => {
        if (!id) {
            setError('Please enter a user ID')
            return
        }
        try{
            setIsLoading(true)
            const response = await axios.get(`${BASE_URL}/users/${id}`)
            setUsers([response.data])
            setIsLoading(false)
            setError(null)

        }catch(err){
            setIsLoading(false)
            setError(err.message || 'Error fetching the array contents')
            console.log(err)
        }
    }

    // TODO:
    // add a post requests
    // add a put requests
    // add a delete requests

    useEffect(() => {
        fetchUsers();
    }, [id])

    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
    <br /> <br />
            <div style={{background: 'grey', width: '100%', minHeight: '70vh', padding: '20px'}}>
                <h2 style={{fontSize: '24px', color: 'whitesmoke'}}>Arrays Contents from Backend using the RESTful API</h2>

                <form action="" onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: 'row'}}>
                    <input type="text" onChange={(e) => setId(e.target.value)} style={{padding: '10px', width: '200px', color: 'black', fontSize: '20px'}}/>
                    <button type="submit" style={{padding: '15px', color: 'white', background: 'lightgreen', fontSize: '10px', borderRadius: '10px'}}>FetchID</button>
                </form>
                
                {loading && <p style={{color: 'whitesmoke'}}>Loading file contents...</p>}
                
                {error && <p style={{color: 'red'}}>Error: {error}</p>}
                
                {users.map(user => (
                    <div style={{background: '#333', color: '#0f0', padding: '15px', borderRadius: '5px', overflowX: 'auto'}} key={user.id}>
                        <p style={{fontSize: '20px', color: 'white'}}>{user.name}</p>
                        <p style={{fontSize: '20px', color: 'white'}}>{user.email}</p>
                    </div>
                ))}
            </div>
    </>
  )
}

export default RESTfull_API