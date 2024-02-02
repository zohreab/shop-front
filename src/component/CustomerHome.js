import React, { useState, useEffect } from 'react';

const CustomerHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your Django backend
    fetch('/selling-product/')  // Add your actual endpoint here
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div>
          {products.map(product => (
            <div key={product.id} style={{ marginBottom: '20px' }}>
              <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
              <p style={{ textAlign: 'center' }}>{product.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerHome;
