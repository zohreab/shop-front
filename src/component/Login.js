import React, { useState } from 'react';
import axios from 'axios';
import { setAuthToken } from '../helpers/setAuthToken'; // Import the setAuthToken helper function

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Your handleSubmit function logic here
    alert("dsasd");

    const loginPayload = {
      username: username,
      password: password
    };

    axios.post('http://localhost:8080/login/', loginPayload)
      .then(response => {
        const token = response.data.token;
        alert("dsasd");
        localStorage.setItem('token', token);
        setAuthToken(token); // Set the token in Axios headers
        
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with a status code
          console.log(err.response.data); // Log the response data for further insights
          console.log(err.response.status); // Log the status code
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log('Error', err.message);
        }
        console.log(err.config);
      }
      );
    }

  return (
    <div>
      {/* Your login form */}
      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <br />
        {/* Password input */}
        <input
          type="password"
          id="passwordInput"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <br />
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
