import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function Balance() {
  const [amount, setAmount] = useState('');
  const [newBalance, setNewBalance] = useState(null);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDeposit = async () => {
    try {
        setAuthHeaders(axios);
      const response = await axios.post('http://localhost:8080/customer/deposit/', {
        amount: parseInt(amount, 10),
      });

      setNewBalance(response.data.balance);
      alert(`Deposit successful! New balance: ${response.data.balance}`);
    } catch (error) {
      alert('Error depositing amount:', error.response.data.detail);
    }
  };

  return (
    <div>
      
      <label htmlFor="amount" style={{border: '2px solid #ccc', padding: '1px' , color:'White', marginRight:5,  backgroundColor:"black"}}>increase balance: </label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={handleDeposit} style={{border: '2px solid #ccc', padding: '1px' , color:'White', marginTop:"2%", backgroundColor:"black"}}>Deposit</button>

      {newBalance !== null && (
        <div>
          <h3 style={{ padding: '1px' , marginRight:"71%" ,color:'White'}}>Balance:</h3>
          <p style={{border: '2px solid #ccc', padding: '1px' , marginRight:"71%" , color:'White', backgroundColor:"black"}}>{newBalance}</p>
        </div>
      )}
    </div>
  );
}

export default Balance;
