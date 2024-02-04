import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(() => {
    getAllSellingProducts();
  }, []);

  const getAllSellingProducts = async () => {
    try {
      setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/cart/');
      const cartProductsWithDetails = await Promise.all(
        response.data.map(async (product) => {
          const detailsResponse = await axios.get(`http://localhost:8080/shop/selling-product/${encodeURIComponent(product.id)}/`);
          return { ...product, details: detailsResponse.data };
        })
      );
      setCartProducts(cartProductsWithDetails);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  
  const getColorLabel = (colorKey) => {
    
    const colorMapping = {
      'RED': 'Red',
      'GRN': 'Green',
      'BLU': 'Blue',
      'YLW': 'Yellow',
      'BLK': 'Black',
      'WHT': 'White',
      'GRY': 'Gray',
      'ORG': 'Orange',
     
    };
  
    return colorMapping[colorKey] || colorKey;
  };

  const boxStyle = {
    width: '30%',
    height: `250px`,
    position: 'relative',
    marginTop: '8%',
    marginLeft: '32%',
    backgroundColor: '#adadad',
    padding: '10px',
    borderRadius: '10px'
  };

  const buttonStyle = {
    width: '15%',
    height: `20px`,
    borderRadius: '30px',
    position: 'relative',
    marginTop: `10%`,
    marginLeft: '25%',
    marginRight: '25%',
    backgroundColor: '#138324',
    padding: '10px',
    margin: '0 auto',
  };

  const containerinputStyle = {
    position: 'relative',
    width: '170px',
    height: '24px',
    marginTop: '50px',
    marginLeft: '85px',
    borderRadius: '30px',
    padding: '15px',
    background: '#707070',
    boxShadow: '14px 14px 80px #cbced1, -14px -14px 90px white',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backgroundStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
  };

  const textStyle = {
    marginLeft: '32%',
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <div style={boxStyle}>
        <div>
          {cartProducts.map((cartProduct) => (
            <div key={cartProduct.id}>
            
             
              {cartProduct.details && (
                <div>
                     <img src={cartProduct.details.image} alt={cartProduct.details.name} width={200} height={200} />
                    
                  <p>Name: {cartProduct.details.name}</p>
                 <p>Color: {getColorLabel(cartProduct.details.color)}</p>
                  
                  <p>Count: {cartProduct.count}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
