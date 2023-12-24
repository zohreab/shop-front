import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
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
        navigate("/");
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
    width: '50%',
    height: `400px`,
    position: 'relative', // Set the position to fixed
    marginTop: `20%`, // Set the initial position
    marginLeft: '25%',
    backgroundColor: '#B76E79',
    padding: '20px',
    border: '2px solid #fff',
    borderRadius: '50px',
    zIndex: '1',
  };



  const inputStyle ={
    height: '90%',
    width: '50%',
    borderRadius: '5px',
    border: '2px solid #fff',
    marginLeft: '25%',
    fontFamily: 'Lalezar',
    direction: 'RTl',
  };

  

  const containerinputStyle = {
    width: '70%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '2px solid #fff',
    maxHeight: '100px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    overflowY: 'auto',
    
  };




  const backgroundStyle = {
    backgroundColor: '#F4C2C2', 
    minHeight: '200vh',
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
            style={inputStyle}
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ورود رمز عبور"
            style={inputStyle }
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            style={inputStyle}
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={inputStyle}
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            style={inputStyle}

            
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            style={inputStyle}
          />
        </div>
        <div style={containerinputStyle}>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            style={inputStyle}
          />
        </div>
        <div style={containerinputStyle}>
          <select onChange={(e) => setUserType(e.target.value)} style={inputStyle}>
          <option value=""></option>
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>

          
          </select>
        </div>
        <div style={containerinputStyle}>
          <button type="submit" style={inputStyle}>ثبت نام</button>
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
