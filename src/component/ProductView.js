import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the details of the specific product based on the product ID in the URL
    axios.get(`http://localhost:8080/shop/product/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  // Display loading message while fetching data
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        {/* Add more fields as needed */}
        <p>ID: {product.id}</p>
        {/* Display additional product information */}
      </div>
    </div>
  );
};

export default ProductView;
