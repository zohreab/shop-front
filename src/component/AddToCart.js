
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

    const buttonStyle = {
        borderRadius:'20px',
        width: '100px',
        padding: '12px' ,
        marginLeft:"25px",
        marginTop:"1%",
        backgroundColor:"#8067a2",
        color:"white"
    }

    const containerinputStyle = {
        position: 'relative',
        width: '50px',
        height: '12px',
        marginTop: '15px',
        marginLeft: '25px',
        borderRadius: '30px',
        padding: '15px',
        background: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    };

  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <input style={containerinputStyle}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
