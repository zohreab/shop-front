import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import back_img from "../img/AllProductsBack.png";
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
  const backgroundStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
};


const buttonStyle = {marginLeft:"45%", 
color:"white", 
backgroundColor:"black", 
marginTop:"2%", 
marginBottom:"2%",
 padding:'8px'}


  return (
    <div style={backgroundStyle}>
      <Navbar/>
      <h1 style={{marginLeft:"37%"}}>Seller Home Page</h1>
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
  );
};

export default SellerHome;
