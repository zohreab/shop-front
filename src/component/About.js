// About.js

import React from 'react';
import back_img from "../img/AboutusBack.png";
import Navbar from "./Navbar";

const backgroundStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
};

function About() {
    return (
        <div style={backgroundStyle}>
            <Navbar/>
        </div>
    );
}

export default About;
