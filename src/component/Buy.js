
import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function Buy({ sellingProductId, onSuccess}) {


  const handleBuy = async () => {
    try {
      
      
      setAuthHeaders(axios);
      const response = await axios.post(
        'http://localhost:8080/cart/buy/',
        {
          selling_product_id: sellingProductId,
          
        }
      );

      onSuccess(response.data);
    } catch (error) {
      alert('Error buying the product:', error);
      
    }
  };

  const buttonStyle = {
    borderRadius:'20px',
    width: '100px',
    padding: '12px' ,
    marginLeft:"8px",
    marginTop:"1%",
    backgroundColor:"#8067a2",
    color:"white"

  }

  return (
    <div>
      
      <button style={buttonStyle} onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default Buy;
