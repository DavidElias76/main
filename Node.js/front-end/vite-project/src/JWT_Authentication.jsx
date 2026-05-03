import React, { useState, useEffect } from 'react';
import axios from 'axios';

const usernameInput = {width: '100%', padding: '8px', fontSize: '14px' }
const paswordInput = {width: '100%', padding: '8px', fontSize: '14px'}

const buttonStyle  = { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}

const buttonLogout = { marginTop: '10px', padding: '10px 20px', backgroundColor: '#dc3545', color: 'white',border: 'none', borderRadius: '4px',cursor: 'pointer'}

const messageStyle = {padding: '10px', marginBottom: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }
const errorStyle = {  padding: '10px', marginBottom: '15px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }

const fectButtonStyle = {padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px',cursor: 'pointer'}
const accessAdminStyle = {padding: '10px 20px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer'}

const API_BASE_URL = 'http://localhost:8080';

function AuthClient() {
  // State management
  const [username, setUsername] = useState(''); // get the username
  const [password, setPassword] = useState(''); // get the password 
  const [token, setToken] = useState(localStorage.getItem('token') || ''); // get the tokan ans set the token to localstorage
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  // Check if user is logged in on component mount
  useEffect(() => {
    if (token) {
      // Automatically fetch profile if token exists
      fetchProfile();
    }
  }, []);

  // Login handler - the function start here
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // fetch the login route
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        username,
        password
      });

    //   the received token is the token that has been sent by the server 
      const { token: receivedToken, message: loginMessage } = response.data;

      // Save token to state and localStorage
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken); // token in saved in localstorage 

      setMessage(loginMessage);
      setPassword(''); // Clear password for security

      // Automatically fetch profile after login
      fetchProfile(receivedToken);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      console.error('Login error:', err);
    }
  };

  // Fetch profile (protected route) -
  const fetchProfile = async (customToken = null) => {
    const authToken = customToken || token;

    if (!authToken) {
      setError('No token available. Please login first.');
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${authToken}` // Send token in Authorization header
        }
      });

      setProfileData(response.data);
      setUser(response.data.user);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch profile');
      console.error('Profile fetch error:', err);

      // If token is invalid/expired, clear it
      if (err.response?.status === 403 || err.response?.status === 401) {
        handleLogout();
      }
    }
  };

  // Fetch admin panel (role-based protected route)
  const fetchAdminPanel = async () => {
    if (!token) {
      setError('No token available. Please login first.');
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setAdminData(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to access admin panel');
      console.error('Admin fetch error:', err);
    }
  };

  // Logout handler
  const handleLogout = () => {
    setToken('');
    setUser(null);
    setProfileData(null);
    setAdminData(null);
    setMessage('');
    setError('');
    localStorage.removeItem('token');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>JWT Authentication Demo</h1>

      {/* Login Form */}

      {!token ? (
        <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={usernameInput} placeholder="user1"/>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={paswordInput} placeholder="password1"/>
            </div>

            <button type="submit" style={buttonStyle}>Login</button>
          </form>

          <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
            Test credentials: username: <strong>user1</strong>, password: <strong>password1</strong>
          </p>

        </div>
      ) : (
        <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #28a745', borderRadius: '8px', backgroundColor: '#d4edda' }}>
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

      {/* Messages - logged in sucessful or denied access */}
      {message && (
        <div style={messageStyle}>{message}</div>
      )}

      {error && (
        <div style={errorStyle}>{error}</div>
      )}

      {/* Protected Routes Actions */}
      {token && (
        <div style={{ marginBottom: '30px' }}>
          <h2>Protected Routes</h2>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button onClick={() => fetchProfile()} style={fectButtonStyle}>Fetch Profile</button>
            <button onClick={fetchAdminPanel} style={accessAdminStyle}>Access Admin Panel</button>
          </div>

          {/* Profile Data */}
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

      {/* Instructions */}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>How JWT Authentication Works:</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Login with credentials → Server validates and returns JWT token</li>
          <li>Client stores token (in state and localStorage)</li>
          <li>For protected routes, client sends token in <code>Authorization: Bearer &lt;token&gt;</code> header</li>
          <li>Server verifies token and grants access</li>
          <li>Role-based routes check user's role from decoded token</li>
        </ol>
        <p><strong>Note:</strong> The admin route will fail because the test user has role 'user', not 'admin'</p>
      </div>
    </div>
  );
}

export default AuthClient;

