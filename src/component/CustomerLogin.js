import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import back_img from "../img/Background.png";

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

  const boxStyle = {
    width: '30%',
    height: `250px`,
    position: 'relative',
    marginTop: '8%',
    marginLeft: '32%',
    backgroundColor: '#adadad',
    padding: '10px',
    borderRadius: '10px'
  };

  const buttonStyle = {
    borderRadius:'20px',
    width: '150px',
    padding: '10px' ,
    marginLeft:"105px",
    marginTop:"25px",
    backgroundColor:"green",
    color:"white"
  }


  const containerinputStyle = {
    position: 'relative',
    width: '170px',
    height: '20px',
    marginTop: '6px',
    marginLeft: '68px',
    marginRight: '8px',
    borderRadius: '30px',
    padding: '15px',
    background: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backgroundStyle = {
    backgroundImage:`url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
  };

  const textStyle= {
    marginLeft: '24%',
  };


  return (
    <div style={backgroundStyle}>
      <Navbar/>
      <div style={boxStyle}>
      <h2 style={textStyle}>Customer Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
        <input style={containerinputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
          <div>
          <input style={containerinputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>
        <div>
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
