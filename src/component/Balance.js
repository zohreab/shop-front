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

    const buttonStyle = {
        borderRadius:'20px',
        width: '150px',
        padding: '10px' ,
        marginLeft:"98px",
        marginTop:"25px",
        backgroundColor:"#8067a2",
        color:"white"
    };

    const containerinputStyle = {
        position: 'relative',
        width: '80px',
        height: '7px',
        marginTop: '8px',
        marginLeft: '10px',
        borderRadius: '30px',
        padding: '15px',
        background: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    };

  return (
    <div>
      
      <label htmlFor="amount" style={{color:"white"}}>increase balance: </label>
      <input style={containerinputStyle}
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={handleDeposit} style={buttonStyle}>Deposit</button>

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
