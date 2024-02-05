
import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function AddToCart({ sellingProductId, onSuccess, onError }) {
  const [count, setCount] = useState(1);

  const handleAddToCart = async () => {
    try {
      
      
      setAuthHeaders(axios);
      const response = await axios.put(
        'http://localhost:8080/cart/add/',
        {
          selling_product_id: sellingProductId,
          count: count,
        }
      );

      onSuccess(response.data);
    } catch (error) {
      alert('Error adding to cart:', error);
      onError(error); 
    }
  };

  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
