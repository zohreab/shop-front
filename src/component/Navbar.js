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
  backgroundColor: '#B76E79',
  
  padding: '10px',
  left: '0',
  position: 'fixed', 
  width: '100%', 
  zIndex: '100', 
  border: '2px solid #fff',
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
