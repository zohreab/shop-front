import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import EditSellingProduct from './EditSellingProduct';
import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";

function SellingProducts() {
  const [sellingProducts, setSellingProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const handleEditSellingProduct = (productId) => {
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
    // Fetch filtered products only if searchTerm is not empty
    if (searchTerm.trim() !== '') {
      getFilteredProducts();
    } else {
      // If search term is empty, fetch all products
      getAllSellingProducts();
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
    width: '50%',
    height: '350px',
    position: 'relative',
    marginTop: '60px',
    margin: '7% auto',
    backgroundColor: '#adadad',
    padding: '20px',
    borderRadius: '10px',
    overflowY: 'auto',
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

  const textStyle= {
    marginLeft: '28%',
  };


 
  return (
    <div style={backgroundStyle}>
      <Navbar />
      <div style={boxStyle}>
        <div>
          <h2 style={textStyle}>All Selling Products</h2>
          
          {/* Product List */}
          <ul style={ulStyle}>
            {sellingProducts.map((product) => (
              <li key={product.id} style={liStyle}>
                <img src={"http://localhost:8080"+ product.image} alt={product.name} width={200} height={200} />
                <p style={{ border: '2px solid #ccc', padding: '8px' }}>Name: {product.name}</p>
                <p style={{ border: '2px solid #ccc', padding: '8px' }}>Color: {getColorLabel(product.color)}</p>
                <p style={{ border: '2px solid #ccc', padding: '8px' }}>Size: {product.size}</p>
                <p style={{ border: '2px solid #ccc', padding: '8px' }}>Properties: {JSON.stringify(product.properties)}</p>
                <p style={{ border: '2px solid #ccc', padding: '8px' }}>Price: ${product.price}</p>
                <p style={{ border: '2px solid #ccc', padding: '8px' }}>Stock Count: {product.stock_count}</p>
                
                <button onClick={() => handleEditSellingProduct(product.id)}>
                  Edit Selling Product
                </button>

                {selectedProductId === product.id && (
                  <EditSellingProduct
                    productId={product.id}
                    onClose={handleCloseForm}
                  />
                )}

               

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SellingProducts;
