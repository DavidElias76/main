import axios from 'axios'
import { useEffect, useState } from 'react'

function FetchJsonFile(){

    const [user, setUser] = useState('')
    const [input, setInput] = useState('')
    const [isloading, setIsLoading] = useState(null)  // Changed: Should be false, not null

    function handleSubmit(e){
        e.preventDefault()
        // ADD: Trigger fetch when form is submitted
        if(input.trim()){
            fetchData()
        }
    }

    // Moved fetchData outside useEffect
    const fetchData = async () => {
        setIsLoading(true)  // Show loading
        try {
            const response = await axios.get(`http://localhost:8080/users/${input}.json`)
            setUser(response.data)  // Changed: axios uses response.data, not response.ok
            setIsLoading(false)
        } catch(error) {
            console.error("Error fetching data:", error)
            setIsLoading(false)
        }
    }

    // Removed: useEffect was running on mount with empty input, preventing requests
    // Only fetch when user submits form now

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px 20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{background: 'white', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',padding: '40px',maxWidth: '500px',width: '100%'}}>
                <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px',fontSize: '28px', fontWeight: '700'}}>User Finder</h1>

                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            color: '#555',
                            fontWeight: '600',
                            fontSize: '14px'
                        }}>Enter the username: 
                        </label>
                        <input 
                            type="text"  
                            value={input}  // Changed: Add controlled input
                            onChange={(e) => setInput(e.target.value)} 
                            placeholder="Type username here..."
                            style={{
                                padding: '12px 15px',
                                width: "100%",
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                transition: 'all 0.3s ease',
                                boxSizing: 'border-box',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                        />
                    </div>
                    <button 
                        type='submit'
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            padding: '12px 20px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                        }}
                        onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'}
                        onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'}
                    >Get User Info</button>
                </form>

                {isloading && (
                    <p style={{
                        color: '#667eea',
                        textAlign: 'center',
                        marginTop: '20px',
                        fontSize: '15px',
                        fontWeight: '500'
                    }}>⏳ Loading file contents...</p>
                )}

                {user && (
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        overflowX: 'auto',
                        marginTop: '30px',
                        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontFamily: "'Courier New', monospace",
                        lineHeight: '2',
                        fontSize: '15px'
                    }}>
                        <div style={{marginBottom: '12px'}}>
                            <strong>ID:</strong> <span style={{color: '#e0e7ff'}}>{user.id}</span>
                        </div>
                        <div style={{marginBottom: '12px'}}>
                            <strong>Username:</strong> <span style={{color: '#e0e7ff'}}>{user.username}</span>
                        </div>
                        <div>
                            <strong>Email:</strong> <span style={{color: '#e0e7ff'}}>{user.email}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FetchJsonFile;