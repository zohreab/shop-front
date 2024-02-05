
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

      onSuccess(response.data); 
    } catch (error) {
      alert('Error editing cart:', error);
   
    }
  };

    const buttonStyle = {
        borderRadius:'20px',
        width: '110px',
        padding: '12px' ,
        marginLeft:"25px",
        marginTop:"1%",
        backgroundColor:"#8067a2",
        color:"white"
    }

    const containerinputStyle = {
        position: 'relative',
        width: '30px',
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
      <label htmlFor="quantity">Edit Quantity:</label>
      <input style={containerinputStyle}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleEditCartProduct}>Edit quantity</button>
    </div>
  );
}

export default EditCartProduct;
