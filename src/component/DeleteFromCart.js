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

      onSuccess(response.data); // Handle success, maybe update the cart state in the parent component
    } catch (error) {
      alert('Error deleting from cart:', error);
       // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
    
      <button onClick={handleDeleteFromCart}>Delete From Cart</button>
      
    </div>
  );
}

export default DeleteFromCart;
