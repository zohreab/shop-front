import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function DeleteFromCart({ sellingProductId, onSuccess}) {


   
    
 
  const handleDeleteFromCart = async () => {
    try {
      
      console.log(sellingProductId)
      setAuthHeaders(axios);
      const response = await axios.delete(
        'http://localhost:8080/cart/delete/',
        {
            data:{selling_product_id: sellingProductId,},
            
          },
      );

      onSuccess(response.data); 
    } catch (error) {
      alert('Error deleting from cart:', error);
      
    }
  };

  return (
    <div>
    
      <button onClick={handleDeleteFromCart}>Delete From Cart</button>
      
    </div>
  );
}

export default DeleteFromCart;
