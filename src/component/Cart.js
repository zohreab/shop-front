import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import DeleteFromCart from "./DeleteFromCart"
import EditCartProduct from "./EditCartProduct"
import Balance from "./Balance"
import DepositHistory from "./DepositHistory";
import BuyHistory from "./BuyHistory";
import Buy from "./Buy";
import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [showDepositHistory, setShowDepositHistory] = useState(false);
  const [showBuyHistory, setShowBuyHistory] = useState(false);

  useEffect(() => {
    getAllSellingProducts();
  }, []);

  const getAllSellingProducts = async () => {
    try {
      setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/cart/');
      const cartProductsWithDetails = await Promise.all(
        response.data.map(async (product) => {
          const detailsResponse = await axios.get(`http://localhost:8080/shop/selling-product/${encodeURIComponent(product.id)}/`);
          return { ...product, details: detailsResponse.data };
        })
      );
      setCartProducts(cartProductsWithDetails);
    } catch (error) {
      alert('Error fetching products:', error);
    }
  };


  const showDepositHistoryHandler = () => {
    setShowDepositHistory(true);
  };
  
  const hideDepositHistoryHandler = () => {
    setShowDepositHistory(false);
  };

  const showBuyHistoryHandler = () => {
    setShowBuyHistory(true);
  };
  
  const hideBuyHistoryHandler = () => {
    setShowBuyHistory(false);
  };

  const getColorLabel = (colorKey) => {
    
    const colorMapping = {
      'RED': 'Red',
      'GRN': 'Green',
      'BLU': 'Blue',
      'YLW': 'Yellow',
      'BLK': 'Black',
      'WHT': 'White',
      'GRY': 'Gray',
      'ORG': 'Orange',
     
    };
  
    return colorMapping[colorKey] || colorKey;
  };
  const boxStyle = {
    width: '60%',
    position: 'relative',
    margin: '1% auto',
    backgroundColor: '#adadad',
    padding: '50px',
    borderRadius: '10px',
    maxHeight: '70vh', 
    overflowY: 'auto', 
  };
  
 
  
  const backgroundStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
  };
  
  const textStyle = {
    marginLeft: '32%',
  };
  
  const ulStyle = {
    overflowY: 'auto',
    maxHeight: '500px', 
  };
  
  const liStyle = {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    
  };
 

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <Balance />
      <div>
      <button onClick={showDepositHistoryHandler} style={{border: '2px solid #ccc', padding: '1px' , color:'White', marginTop:10, backgroundColor:"black"}}>Show Deposit History</button>

          {showDepositHistory && (<>
              <DepositHistory />
              
              <button onClick={hideDepositHistoryHandler} style={{border: '2px solid #ccc', padding: '1px' , color:'White', marginTop:10, backgroundColor:"black"}}>Hide Deposit History</button>
            </>
          )}
      </div>
      <div>
      <button onClick={showBuyHistoryHandler}  style={{border: '2px solid #ccc', padding: '1px' , color:'White',  marginTop:10,  backgroundColor:"black"}}>Show Buy History</button>

          {showBuyHistory && (<>
              <BuyHistory />
              
              <button onClick={hideBuyHistoryHandler} style={{border: '2px solid #ccc', padding: '1px' , color:'White', marginTop:10, backgroundColor:"black"}} >Hide Buy History</button>
            </>
          )}
          </div>
      <div style={boxStyle}>
      <h2 style={textStyle}>All Cart Products</h2>
        <div>
        <ul style={ulStyle}>
          {cartProducts.map((cartProduct) => (
            <li key={cartProduct.id} style={liStyle}>
           
             
              {cartProduct.details && (
                <div>
                     <img src={"http://localhost:8080"+cartProduct.details.image} alt={cartProduct.details.name} width={200} height={200} />
                    
                  <p style={{ border: '2px solid #ccc', padding: '8px' }}> Name: {cartProduct.details.name}</p>
                  <p style={{ border: '2px solid #ccc', padding: '8px' }}>Color: {getColorLabel(cartProduct.details.color)}</p>
                  <p style={{ border: '2px solid #ccc', padding: '8px' }}>Count: {cartProduct.count}</p>
                  
                  <DeleteFromCart
                  sellingProductId={cartProduct.id}
                  onSuccess={(updatedCart) => alert('Product deleted from cart!', updatedCart)}
                  
                />

                <EditCartProduct
                  sellingProductId={cartProduct.id}
                  onSuccess={(updatedCart) => alert('Product quantity edited!', updatedCart)}
                 
                />

              <Buy
                  sellingProductId={cartProduct.id}
                  onSuccess={(updatedCart) => alert('bought the product successfully!', updatedCart)}
                 
                />

                </div>

              )}
            </li>
           
          ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Cart;
