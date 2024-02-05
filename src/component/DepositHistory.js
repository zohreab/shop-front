import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';


function DepositHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getDepositHistory();
  }, []);

  const getDepositHistory = async () => {
    try {
        setAuthHeaders(axios);
      const response = await axios.get('http://localhost:8080/customer/deposit-history/');
      setHistory(response.data);
    } catch (error) {
      alert('Error fetching deposit history:', error);
    }
  };

  return (
    <div>
      <h2 style={{border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"40%",  marginRight:"43.5%", backgroundColor:"black"}}>Deposit History</h2>
      <ul>
        {history.map((record) => (
          <li key={record.date} style={{border:'2px solid white'} }>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}> Amount: {record.amount}</p>
            <p style={{ border: '2px solid #ccc', padding: '8px' , color:'White', marginLeft:"25%",  marginRight:"25%", backgroundColor:"black"}}> Date: {record.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepositHistory;
