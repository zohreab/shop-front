import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';


function BuyHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getBuyHistory();
  }, []);

  const getBuyHistory = async () => {
    try {
        setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/customer/buy-history/');
      setHistory(response.data);
    } catch (error) {
      alert('Error fetching buy history:', error);
    }
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

  return (
    <div>
      <h2 style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"40%",  marginRight:"43.5%", backgroundColor:"black"}}>Buy History</h2>
      <ul>
        {history.map((record) => (
          <li key={record.date} style={{border:'2px solid white'} }>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}>Name: {record.name}</p>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}>Color: {getColorLabel(record.color)}</p>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}>Price: {record.price}</p>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}>Count: {record.count}</p>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}>Date: {record.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyHistory;
