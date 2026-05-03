
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = 'http://localhost:8080'

function JWT_API_Authenticate() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [profileData, setProfileData] = useState(null);
    const [adminData, setAdminData] = useState(null);


    const handleLogin = async () => {

        e.preventDefault();
        setError('');
        setMessage('');

        try{
            const response = axios.post(`${BASE_URL}/login`, {
                username,
                password
            })

            // get the message and the token that has been sent from the server 
            const {token: receivedToken, message: loginMessage} = response.data;
            
            setToken(receivedToken) // set the token
            localStorage.setItem('token', receivedToken);  // set to localstorage

            setMessage(loginMessage);
            setPassword(''); // Clear password for security

            // automatically fetch the profile after log in
            fetchProfile(receivedToken)
        }catch(error){
            console.error('')
        }
    }

    const fetchProfile = async (customToken = null) => {
        const authToken = customToken || token

        if(!authToken){
            setError('No token available, Please log in first')
            return;
        }

        try{
            // it will send a get request with the token as te headers
            const response = axios.get(`${BASE_URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }) 
            setProfileData(response.data)
            setUser(response.data.user);
            setError('')
            
        }catch(error){
            setError(err.response?.data?.message || 'Failed to fetch profile');
            console.error('Profile fetch error:', err);

            if (err.response?.status === 403 || err.response?.status === 401) {
                handleLogout();
            }
        }
    }

    const fetchAdminPanel = async () => {
        if(!token){
            setError('No token available. Please login first.')
        }

        try{
            const response = axios.get(`${BASE_URL}/admin`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setAdminData(response.data)
            setError('')
        }catch(err){
            setError(err.response?.data?.message || 'Failed to access admin panel');
            console.error('Admin fetch error:', err);
        }
    }

    const handleLogout =  () => {
        setToken('');
        setUser(null);
        setProfileData(null);
        setAdminData(null);
        setMessage('');
        setError('');
        localStorage.removeItem('token');
    }

  return (
    <div>
        <h2>JWT Authentication</h2>
        {!token ? (
            <div>
                <h2>Logn in</h2>
                <form action="" onSubmit={handleLogin}>
                    {/* the username section */}
                    <div>
                        <label htmlFor="">Username: 
                            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                        </label>
                    </div>
                    {/* the passowrd section */}
                    <div>
                        <label htmlFor="">
                            <input type="text"  onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        ): (
            <div>
                <h2>Logged In</h2>
                <p><strong>Token:</strong> {token.substring(0, 20)}...</p>
                {user && (
            <div>
              <p><strong>User ID:</strong> {user.id}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
          )}
          <button onClick={handleLogout} style={buttonLogout}>Logout</button>
        </div>
        )}

        {message && (
            <div style={messageStyle}>{message}</div>
        )}

        {error && (
            <div style={errorStyle}>{error}</div>
        )}

        {/*display the profile data  */}
        {token && (
        <div style={{ marginBottom: '30px' }}>
          <h2>Protected Routes</h2>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button onClick={() => fetchProfile()} style={fectButtonStyle}>Fetch Profile</button>
            <button onClick={fetchAdminPanel} style={accessAdminStyle}>Access Admin Panel</button>
          </div>

          {/* Profile Data - which is the object  */}
          {profileData && (
            <div style={{ padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '4px', marginBottom: '15px' }}>
              <h3>Profile Data:</h3>
              <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
                {JSON.stringify(profileData, null, 2)}
              </pre>
            </div>
          )}

          {/* Admin Data */}
          {adminData && (
            <div style={{ padding: '15px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
              <h3>Admin Panel Data:</h3>
              <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
                {JSON.stringify(adminData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default JWT_API_Authenticate