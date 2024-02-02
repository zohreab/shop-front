import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all products on component mount
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

  const getFilteredProducts = async () => {
    try {
      setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/shop/product/filter/', {
        params: { name_filter: searchTerm },
      });
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
    // Fetch filtered products only if searchTerm is not empty
    if (searchTerm.trim() !== '') {
      getFilteredProducts();
    } else {
      // If search term is empty, fetch all products
      getAllProducts();
    }
  };

  return (
    <div>
      <h2>All Products</h2>
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Search by name" />
        <button type="submit">Search</button>
      </form>

      {/* Product List */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} width={200} height={200}/>
            <p>{product.name}</p>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default Products;
