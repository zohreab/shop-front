import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import back_img from "../img/AllProductsBack.png";
import Navbar from "./Navbar";

function CreateSellingProduct({ productId, onClose }) {
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
      const propertiesObject = JSON.parse(properties); // Parse properties as JSON
      const response = await axios.post('http://localhost:8080/shop/selling-product/create/', {
        product_id: productId,
        color,
        size,
        price,
        properties: propertiesObject, // Use the parsed JSON object
        stock_count: stockCount,
      });
      console.log('Selling product created:', response.data);
      onClose(); // Close the form after successful submission
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrors({ color: error.response.data.error });  // Store color error separately
      } else if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error creating selling product:', error);
      }
    }
  };

    const buttonStyle = {
        borderRadius:'20px',
        width: '150px',
        padding: '10px' ,
        marginLeft:"10px",
        marginTop:"25px",
        backgroundColor:"#8067a2",
        color:"white"
    }

    const boxStyle = {
        width: '40%',
        height: '400px',
        position: 'relative',
        marginLeft: '26.5%',
        marginTop: '3%',
        backgroundColor: '#adadad',
        padding: '20px',
        borderRadius: '10px',
    };

    const backgroundStyle = {
        backgroundImage:`url(${back_img})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px',
        position: 'relative',
    };


    const containerinputStyle = {
        position: 'relative',
        width: '118px',
        height: '5px',
        marginTop: '11px',
        marginLeft: '10px',
        borderRadius: '30px',
        padding: '15px',
        background: '#ffffff',
    };

  return (
      <div style={backgroundStyle}>
          <Navbar/>
          <div style={boxStyle}>
          <form onSubmit={handleSubmit}>
      {errors && errors.color && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          {errors.color}
        </div>
      )}
      <label>
  Color:
  <select style={buttonStyle} value={color} onChange={(e) => setColor(e.target.value)}>
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
        <input style={containerinputStyle}  type="text" value={properties} onChange={(e) => setProperties(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input style={containerinputStyle}  type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Stock Count:
        <input style={containerinputStyle}  type="number" value={stockCount} onChange={(e) => setStockCount(e.target.value)} />
      </label>
      <br />
      <button style={buttonStyle}  type="submit">Submit</button>
    </form>
      </div>
      </div>
  );
}

export default CreateSellingProduct;
