
import axios from 'axios'
import { useState } from 'react'
import './App.css'

function GetTodos(){
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [isloading, setIsLoading] = useState(null)  // Changed: Should be false, not null

    const fecthTodos = async () => {
        const reponse = axios.get(`/${input}`)
        setTodos(reponse.data)
        isloading(false)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className='divStyles'>
            <form action="GET" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <label htmlFor="" className='label-text'>Enter the text 'todos' to get the todos object from the back-end
                    <input type="text"  className='input-form'/>
                </label>

                <button type='submit' className='submit-btn'>Get Todos</button>
            </form>

            {isloading && (
                    <p style={{ color: '#667eea', textAlign: 'center', marginTop: '20px', fontSize: '15px',fontWeight: '500'}}>⏳ Loading file contents...</p>)}

            {/* display the code in this section after looping the todos  */}
            

        </div>
    )

}

export default GetTodos;