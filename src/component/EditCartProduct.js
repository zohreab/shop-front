
import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function EditCartProduct({ sellingProductId, onSuccess }) {
  const [count, setCount] = useState(1);

  const handleEditCartProduct = async () => {
    try {
      
      
      setAuthHeaders(axios);
      const response = await axios.put(
        'http://localhost:8080/cart/edit/',
        {
          selling_product_id: sellingProductId,
          count: count,
        }
      );

      onSuccess(response.data); // Handle success, maybe update the cart state in the parent component
    } catch (error) {
      alert('Error editing cart:', error);
     // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
      <label htmlFor="quantity">Edit Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleEditCartProduct}>Edit quantity</button>
    </div>
  );
}

export default EditCartProduct;
