// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="/" style={{color:'black'}}>Home</a></li>
        <li style={liStyle}><a href="/about"style={{color:'black'}}>About</a></li>
        <li style={liStyle}><a href="/contact" style={{color:'black'}}>Contact</a></li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#b7b7b7',
  margin: '0 auto',
  padding: '1px',
  borderRadius: '15px',
  width: '44%',
  marginLeft: '26%',
  boxShadow: '3px 3px 150px #cbced1, -150px -150px 150px white',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
};

const liStyle = {
  margin: '0 10px',
};

export default Navbar;
