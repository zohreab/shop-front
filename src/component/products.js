
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import CreateSellingProduct from './CreateSellingProduct';
import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/shop/product/filter/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateSellingProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseForm = () => {
    setSelectedProductId(null);
  };

  const getFilteredProducts = async () => {
    try {
      setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/shop/product/filter/', {
        params: { name_filter: searchTerm },
      })
      setProducts(response.data);
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
      
      getAllProducts();
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
        <Navbar/>
        <div style={boxStyle}>
    <div>
      <h2 style={textStyle}>All Products</h2>
   
      <form onSubmit={handleSearchSubmit}>
        <div style={containerinputStyle}>
        <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Search by name" />
        </div>
        <div style={buttonStyle}>
        <button type="submit">Search</button>
        </div>
      </form>

   
     
      <ul style={ulStyle}>
        {products.map((product) => (
          <li key={product.id} style={liStyle}>
            <img src={"http://localhost:8080"+ product.image} alt={product.name} width={200} height={200}/>
            <p style={{ border: '2px solid #ccc', padding: '8px' }}>{product.name}</p>
            <button onClick={() => handleCreateSellingProduct(product.id)}>
              Create Selling Product
            </button>

            {selectedProductId === product.id && (
              <CreateSellingProduct productId={product.id} onClose={handleCloseForm} />
            )}
          </li>
        ))}
      </ul>
    </div>
        </div>
      </div>

        );
}

export default Products;
