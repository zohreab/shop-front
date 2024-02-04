import React from 'react';
import { useNavigate } from 'react-router-dom'; // or '@reach/router' if you are using Reach Router

const SellerHome = () => {
  const navigate = useNavigate();

  const navigateToCreateProduct = () => {
    navigate('/createproduct');
  };

  
  const navigateToProducts = () => {
    navigate('/product');
  };


  const navigateToSellingProduct = () => {
    navigate('/sellingproduct');
  };

  return (
    <div>
      <h1>Seller Home Page</h1>
      <div>
        <button onClick={navigateToCreateProduct}>Create Product View</button>
      </div>
      <div>
        <button onClick={navigateToProducts}>products</button>
      </div>
      <div>
        <button onClick={navigateToSellingProduct }>selling products</button>
      </div>
    </div>
  );
};

export default SellerHome;
