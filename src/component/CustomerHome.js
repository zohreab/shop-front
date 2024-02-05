import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom'; 
import AddToCart from "./AddToCart" 

function CustomerHome() {

    
      const [sellingProducts, setSellingProducts] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      
      const navigate = useNavigate();

      
      useEffect(() => {
     
        getAllSellingProducts();
      }, []);
    
      const getAllSellingProducts = async () => {
        try {
          setAuthHeaders(axios);
          const response = await axios.get('http://localhost:8080/shop/selling-product/filter/');
          setSellingProducts(response.data);
        } catch (error) {
          alert('Error fetching products:', error);
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
    
    
      const navigateTocart = () => {
        navigate('/cart');
      };
   
    
      const getFilteredProducts = async () => {
        try {
          setAuthHeaders(axios);
          const response = await axios.get('http://localhost:8080/shop/product/filter/', {
            params: { name_filter: searchTerm },
          })
          setSellingProducts(response.data);
        } catch (error) {
          alert('Error fetching filtered products:', error);
        }
      };
    
      const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchSubmit = (event) => {
        event.preventDefault();
       
        if (searchTerm.trim() !== '') {
          getFilteredProducts();
        } else {
        
          getAllSellingProducts();
        }
      };
      
    
      const boxStyle = {
        width: '60%',
        position: 'relative',
        margin: '8% auto',
        backgroundColor: '#adadad',
        padding: '20px',
        borderRadius: '10px',
        maxHeight: '70vh', 
        overflowY: 'auto', 
      };
    
      
     
      
      const backgroundStyle = {
        backgroundImage: `url(${back_img})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'auto',
      };
      
      const textStyle = {
        marginLeft: '32%',
      };
      
      const ulStyle = {
        overflowY: 'auto',
        maxHeight: '500px', 
      };
      
      const liStyle = {
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        marginBottom: '10px',
        
      };

    
      
      return (
        <div style={backgroundStyle}>
          <Navbar />
          <div style={boxStyle}>
          <div>
            <button onClick={navigateTocart} style={{ border: '2px solid white', padding: '10px' , marginLeft:"45%", backgroundColor:"black", color:"white"}}>Cart</button>
          </div>
            <div>
              <h2 style={textStyle}>All Selling Products</h2>
              <div >
            
              </div>
              <ul style={ulStyle}>
                {sellingProducts.map((product) => (
                  <li key={product.id} style={liStyle}>
                    <img src={`http://localhost:8080${product.image}`} alt={product.name} width={200} height={200}  />
                    <p style={{ border: '2px solid #ccc', padding: '8px' }}>Name: {product.name}</p>
                    <p style={{ border: '2px solid #ccc', padding: '8px' }}>Color: {getColorLabel(product.color)}</p>
                    <p style={{ border: '2px solid #ccc', padding: '8px' }}>Size: {product.size}</p>
                    <p style={{ border: '2px solid #ccc', padding: '8px' }}>Properties: {JSON.stringify(product.properties)}</p>
                    <p style={{ border: '2px solid #ccc', padding: '8px' }}>Price: ${product.price}</p>
                    <p style={{ border: '2px solid #ccc', padding: '8px' }}>Stock Count: {product.stock_count}</p>
                    <AddToCart
                      sellingProductId={product.id}
                      onSuccess={(updatedCart) => alert('Product added to cart!', updatedCart)}
                      onError={(error) => alert('Error adding to cart:', error)}
                    />
                  </li>
                ))}
              </ul>
            </div>
           
          </div>
          
        </div>
      );
      
    }

export default CustomerHome;
