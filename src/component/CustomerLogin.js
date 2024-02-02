import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login/', {
        username,
        password,
      });

      if (response.status === 200) {
       
        const { access, refresh } = response.data;
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        navigate('/customerhome'); 
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };


  
  const backgroundStyle = {
    backgroundColor: '#F4C2C2', 
    minHeight: '200vh',
    padding: '20px',
    position: 'relative', 
  };

  return (
    <div style={backgroundStyle}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default CustomerLogin;
