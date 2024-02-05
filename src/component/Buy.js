
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

  return (
    <div>
      
      <button onClick={handleBuy}>Buy the product</button>
    </div>
  );
}

export default Buy;
