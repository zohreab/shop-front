import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import back_img from "../img/Background.png";
import Navbar from "./Navbar";

const SellerLogin = () => {
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
        navigate('/sellerhome'); 
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };


  const boxStyle = {
    width: '30%',
    height: `280px`,
    position: 'relative',
    marginTop: '8%',
    marginLeft: '32%',
    backgroundColor: '#adadad',
    padding: '13px',
    borderRadius: '10px'
  };

  const buttonStyle = {
    borderRadius:'20px',
    width: '120px',
    padding: '10px' ,
    marginLeft:"120px",
    marginTop:"20px",
    backgroundColor:"green",
    color:"white",
    fontSize: "14px"
  }


  const containerinputStyle = {
    position: 'relative',
    width: '170px',
    height: '20px',
    marginTop: '10px',
    marginLeft: '80px',
    borderRadius: '30px',
    padding: '15px',
    background: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  };

  const backgroundStyle = {
    backgroundImage:`url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
  };

  const textStyle= {
    marginLeft: '32%',
  };

  return (
    <div style={backgroundStyle}>
      <Navbar/>
      <div style={boxStyle}>
      <h2 style={textStyle}>Seller Login</h2>
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
        <button style={buttonStyle} onClick={handleLogin}>Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SellerLogin;
