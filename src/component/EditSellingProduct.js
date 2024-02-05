import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

function EditSellingProduct({ productId, onClose }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [properties, setProperties] = useState('');
  const [stockCount, setStockCount] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setAuthHeaders(axios);
      const payload = {
        color: color.trim() || undefined, // Set to undefined if empty
        size: size.trim() || undefined, // Set to undefined if empty
        price: price.trim(), // Price is required
        properties: properties.trim() ? JSON.parse(properties) : undefined, // Set to undefined if empty
        stock_count: stockCount.trim() || undefined, // Set to undefined if empty
      };
      
 const response = await axios.put(`http://localhost:8080/shop/selling-product/${encodeURIComponent(productId)}/update/`, payload);
      
      console.log('Selling product updated:', response.data);
      onClose(); // Close the form after successful submission
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrors({ color: error.response.data.error });  // Store color error separately
      } else if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error updating selling product:', error);
      }
    }
  };

    const buttonStyle = {
        borderRadius:'20px',
        width: '100px',
        padding: '12px' ,
        marginLeft:"8px",
        marginTop:"1%",
        backgroundColor:"#8067a2",
        color:"white"

    }

    const containerinputStyle = {
        position: 'relative',
        width: '50px',
        height: '3px',
        marginTop: '15px',
        marginLeft: '8px',
        borderRadius: '30px',
        padding: '15px',
        background: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    };

  return (
    <form onSubmit={handleSubmit}>
      {errors && errors.color && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          {errors.color}
        </div>
      )}
      <label>
  Color:
  <select style={containerinputStyle} value={color} onChange={(e) => setColor(e.target.value)}>
    <option value="">Select Color</option>
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
    <option value="Yellow">Yellow</option>
    <option value="Black">Black</option>
    <option value="White">White</option>
    <option value="Gray">Gray</option>
    <option value="Orange">Orange</option>
  </select>
</label>
      <br />
      <label>
        Size:
        <input style={containerinputStyle} type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </label>
      <br />
      <label>
        Properties:
        <input style={containerinputStyle} type="text" value={properties} onChange={(e) => setProperties(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input style={containerinputStyle} type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Stock Count:
        <input style={containerinputStyle} type="number" value={stockCount} onChange={(e) => setStockCount(e.target.value)} />
      </label>
      <br />
      <button style={buttonStyle}  onClick={handleSubmit}>Update Selling Product</button>
      <button style={buttonStyle} onClick={onClose}>Close</button>
    </form>
  );
}

export default EditSellingProduct;
