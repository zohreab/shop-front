import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import SellingProductPriceHistory from './SellingProductPriceHistory'
import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom'; 
import AddToCart from "./AddToCart" 

function CustomerHome() {

    
      const [sellingProducts, setSellingProducts] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedProductId, setSelectedProductId] = useState(null);
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
          console.error('Error fetching filtered products:', error);
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
        backgroundImage:`url(${back_img})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px',
        position: 'relative',
      };
    
      const textStyle= {
        marginLeft: '32%',
      };
    
    
     
      return (
        <div style={backgroundStyle}>
          <Navbar />
          <div style={boxStyle}>
            <div>
              <h2 style={textStyle}>All Selling Products</h2>
             
              <ul>
                {sellingProducts.map((product) => (
                  <li key={product.id}>
                    <img src={product.image} alt={product.name} width={200} height={200} />
                    <p>Name: {product.name}</p>
                    <p>Color: {getColorLabel(product.color)}</p>
                    <p>Size: {product.size}</p>
                    <p>Properties: {JSON.stringify(product.properties)}</p>
                    <p>Price: ${product.price}</p>
                    <p>Stock Count: {product.stock_count}</p>

                    <AddToCart
                  sellingProductId={product.id}
                  onSuccess={(updatedCart) => console.log('Product added to cart!', updatedCart)}
                  onError={(error) => console.error('Error adding to cart:', error)}
                />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div> <button onClick={navigateTocart }>Cart</button></div>
        </div>
      );
    }

export default CustomerHome;
