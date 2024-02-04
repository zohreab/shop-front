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

  return (
    <form onSubmit={handleSubmit}>
      {errors && errors.color && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          {errors.color}
        </div>
      )}
      <label>
  Color:
  <select value={color} onChange={(e) => setColor(e.target.value)}>
    <option value="">Select Color</option>
    <option value="Red">Red</option>
    <option value="Greed">Green</option>
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
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </label>
      <br />
      <label>
        Properties:
        <input type="text" value={properties} onChange={(e) => setProperties(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Stock Count:
        <input type="number" value={stockCount} onChange={(e) => setStockCount(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Update Selling Product</button>
      <button onClick={onClose}>Close</button>
    </form>
  );
}

export default EditSellingProduct;
