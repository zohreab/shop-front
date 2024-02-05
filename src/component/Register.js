import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import back_img from '../img/Background.png'
import { useNavigate } from "react-router-dom";

  const Register = () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   

    const registerPayload = {
      username: username,
      password: password,
      confirm_password: confirmPassword,
      email: email,
      phone_number: phoneNumber,
      first_name: firstName,
      last_name: lastName,
      user_type: userType,
    };

    axios.post('http://localhost:8080/register/', registerPayload)
      .then(response => {
        console.log(response.data);
        // Perform actions upon successful registration
        alert("successful");
        if (userType === 'CUSTOMER') {
          navigate("/customerlogin");
        } else if (userType === 'SELLER') {
          navigate("/sellerlogin");
        }
       
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          
          setError(err.response.data.message); // Set error message received from the API
        } else {
          setError('An error occurred. Please try again.'); // Generic error message
        }
      });
  };

  const textStyle= {
    marginLeft: '40%',
  };

  const boxStyle = {
    width: '42%',
    height: `440px`,
    position: 'relative',
    marginTop: `1%`,
    marginLeft: '26%',
    backgroundColor: '#adadad',
    borderRadius: '10px',
    padding: '15px',
  };

    const buttonStyle = {
      borderRadius:'20px',
      width: '120px',
      padding: '10px' ,
      marginLeft:"-14px",
      marginTop:"20px",
      backgroundColor:"green",
      color:"white",
      fontSize: "14px"
    }

    const containerinputStyleHorizontal = {
      position: 'relative',
      width: '160px',
      height: '10px',
      marginTop: '15px',
      marginRight: '5px',
      borderRadius: '30px',
      padding: '20px',
      background: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    };

  const containerinputStyle = {
    position: 'relative',
    width: '170px',
    height: '20px',
    marginTop: '8px',
    marginRight: '8px',
    borderRadius: '30px',
    padding: '15px',
    background: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    overflowY: 'auto',
  };

    const backgroundStyle = {
      backgroundImage:`url(${back_img})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative',
    };

  return (
    <div style={backgroundStyle}>
      <Navbar/>
      <div style={boxStyle}>
        <h2 style={textStyle}>Register</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <input style={containerinputStyle}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <input style={containerinputStyleHorizontal}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div>
          <input style={containerinputStyleHorizontal}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <input style={containerinputStyle}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div>
          <input style={containerinputStyle}
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <input style={containerinputStyle}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </div>
        <div>
          <input style={containerinputStyle}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
          />
        </div>
        </div>

        <div>
          <select style={containerinputStyle} onChange={(e) => setUserType(e.target.value)}
          >
          <option value=""></option>
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>
          </select>
        </div>

        <div>
          <button type="submit" style={buttonStyle}> submit</button>
        </div>
</form>

{error && (
          <div style={{ color: 'red', textAlign: 'center' }}>
            {error}
          </div>
        )}
    </div>
    </div>
  );
};

export default Register;
