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


  const boxStyle = {
    width: '40%',
    height: `375px`,
    position: 'relative',
    marginTop: `4%`,
    marginLeft: '27%',
    backgroundColor: '#707070',
    padding: '10px',
  };

    const buttonStyle = {
      width: '15%',
      height: `20px`,
      borderRadius: '30px',
      position: 'relative',
      marginTop: `5%`,
      marginLeft: '25%',
      marginRight: '25%',
      backgroundColor: '#138324',
      padding: '10px',
    };


    const containerinputStyleHorizontal = {
      position: 'relative',
      width: '160px',
      height: '10px',
      marginTop: '12px',
      marginRight: '5px',
      borderRadius: '30px',
      padding: '20px',
      background: '#707070',
      boxShadow: '14px 14px 80px #cbced1, -14px -14px 90px white',
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
    background: '#707070',
    boxShadow: '14px 14px 80px #cbced1, -14px -14px 90px white',
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
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{containerinputStyle}}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={containerinputStyleHorizontal}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{containerinputStyleHorizontal}}
          />
        </div>
        <div style={containerinputStyleHorizontal}>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            style={{containerinputStyleHorizontal, placeholder: {color: '#fff'}}}
          />
        </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={{containerinputStyle, placeholder: {color: '#fff'}}}
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            style={{containerinputStyle, placeholder: {color: '#fff'}}}
          />
        </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            style={{containerinputStyle, placeholder: {color: '#fff'}}}
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            style={{containerinputStyle, placeholder: {color: '#fff'}}}
          />
        </div>
        </div>

        <div style={containerinputStyle}>
          <select onChange={(e) => setUserType(e.target.value)} style={{containerinputStyle}}
          >
          <option value=""></option>
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>
          </select>
        </div>

        <div style={buttonStyle}>
          <button type="submit" style={{containerinputStyle}}
          >submit</button>
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
