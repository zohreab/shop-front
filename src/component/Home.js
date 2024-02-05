import back_img from "../img/HomeBack.png";
import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";
import seller_img from "../img/seller.png";


const backgroundStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
};

const sellerStyle = {
    height: '50px',
    position: 'relative',
    marginTop: '415px',
    marginLeft: '220px'
};


const customerStyle = {
    height: '50px',
    position: 'relative',
    marginTop: '415px',
    marginLeft: '190px'
};


const registerStyle = {
    height: '50px',
    position: 'relative',
    marginTop: '415px',
    marginLeft: '200px'
};

function Home() {
    return (
        <div style={backgroundStyle}>
            <Link to="/sellerlogin">
                <img style={sellerStyle}
                    src={require("../img/seller.png")}
                />
            </Link>

            <Link to="/customerlogin">
                <img style={customerStyle}
                     src={require("../img/customer.png")}
                />
            </Link>

            <Link to="/register">
                <img style={registerStyle}
                     src={require("../img/register.png")}
                />
            </Link>
        </div>
    );
}

export default Home;
