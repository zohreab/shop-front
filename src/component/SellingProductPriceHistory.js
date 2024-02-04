import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';


function SellingProductPriceHistory({ productId, onClose }) {
  const [priceHistory, setPriceHistory] = useState([]);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        setAuthHeaders(axios);
        const response = await axios.get(`http://localhost:8080/shop/selling-product/${encodeURIComponent(productId)}/price-history/`);
        setPriceHistory(response.data);
      } catch (error) {
        console.error('Error fetching price history:', error);
      }
    };

    fetchPriceHistory();
  }, [productId]);

  return (
    <div>
      <h3>Price History for Product {productId}</h3>
      <ul>
        {priceHistory.map((record, index) => (
          <li key={index}>
            <p>Price: ${record.price}</p>
            <p>Date: {record.date}</p>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close Price History</button>
    </div>
  );
}

export default SellingProductPriceHistory;
