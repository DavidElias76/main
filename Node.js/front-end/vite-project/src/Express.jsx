import axios from 'axios'
import { useEffect, useState } from 'react'

const API_BASE_URL = 'http://localhost:8080' // setup the base url

export default function Express() {

  const [user, setUser] = useState('')
//   const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [values, setValues] = useState([
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    }
]); // values is an array of object 

// The get method 
const fetchData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/`)
            setUser(response.data)
            setError(null)
        } catch (err) {
            console.error('Error fetching data:', err)
            setError('Failed to fetch data from server')
        } finally {
            console.log('Data fecthed sucesssfully')
            setLoading(false)
        }
    }

    // The post method 
    const fetchPosts = async () => {
    
        // the object will be sent to the server 
        const newData = {
            name: 'Mary Jane',
            email: 'maryjane@gmail.com'
        }
    
        try {
            const reponse = await axios(`${API_BASE_URL}/about`, newData)
            setValues([...values, reponse.data])
            setError(null)
        }catch(err){
            setError('Failed to fetch data from server')
            console.log('Error fetching the data')
            
        }
    }

useEffect(() => {
    fetchData()
}, [])

  return (
    <div style={centerStyle}>
        <div style={centerStyle}>{error}</div>
        <h1 style={{ color: 'green', fontSize: '24px' }}>{user}</h1><span><button onClick={fetchPosts}>Add Posts</button></span>

        {values.map(value => {
            <div style={{padding: '15px', display: 'flex', flexDirection: 'column', borderRadius: '10px', background: 'darkgrey'}} key={value.id}>
                <p style={{fontSize: '10px', fontWeight: 'bold'}}>{value.name}</p>
                <p style={{fontSize: '10px', fontWeight: 'bold'}}>{value.email}</p>
            </div>
        })}
    </div>
    
  )
}

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
}