import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import back_img from "../img/SellerHomeBack.png";
import Navbar from "./Navbar";

const SellerHome = () => {
  const navigate = useNavigate();

  const navigateToCreateProduct = () => {
    navigate('/createproduct');
  };

  
  const navigateToProducts = () => {
    navigate('/product');
  };


  const navigateToSellingProduct = () => {
    navigate('/sellingproduct');
  };


    const boxStyle = {
        width: '42%',
        height: `330px`,
        position: 'relative',
        marginTop: `6%`,
        marginLeft: '26%',
        backgroundColor: '#adadad',
        borderRadius: '10px',
        padding: '15px',
    };

    const textStyle= {
        marginLeft: '25%',
        fontSize: '30px'
    };

  const backgroundStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
};


    const buttonStyle = {
        borderRadius:'20px',
        width: '170px',
        height: '60px',
        padding: '13px' ,
        marginLeft:"160px",
        marginTop:"20px",
        backgroundColor:'#8067a2',
        color:"white",
        fontSize: "15px"
    }


  return (
    <div style={backgroundStyle}>
      <Navbar/>
        <div style={boxStyle}>

      <h1 style={textStyle}>Seller Homepage</h1>
      <div>
        <button onClick={navigateToCreateProduct} style={buttonStyle}>Create Product View</button>
      </div>
      <div>
        <button onClick={navigateToProducts} style={buttonStyle}>products</button>
      </div>
      <div>
        <button onClick={navigateToSellingProduct } style={buttonStyle}>selling products</button>
      </div>
    </div>
    </div>

  );
};

export default SellerHome;
