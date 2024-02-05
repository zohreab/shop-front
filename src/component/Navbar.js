// Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; 


const Navbar = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <div style={containerinputStyle}><a href="/" style={{color:'white'}}>Home</a></div>
        <li style={containerinputStyle}><div onClick={navigateToAbout} style={{color:'white'}}>About </div></li>
        <li style={containerinputStyle}><a href="/contact" style={{color:'white'}}>Contact</a></li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#b7b7b7',
  padding: '1px',
  borderRadius: '20px',
  width: '44%',
  marginLeft: '26%',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
};

const liStyle = {
  margin: '0 10px',
};

const containerinputStyle = {
  position: 'relative',
  width: '50px',
  height: '20px',
  borderRadius: '30px',
  padding: '10px',
  background: '#707070',
};

export default Navbar;
