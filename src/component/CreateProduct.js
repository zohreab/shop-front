import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import productBack from "../img/ProductBack.png";
import back_img from "../img/Background.png";
import Navbar from "./Navbar";

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState(null); // Store the image file as state

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle the image file change
    setImageFile(e.target.files[0]);
  };

  const handleCreateProduct = async () => {
    try {
      // Set Authorization header with the access token
      setAuthHeaders(axios);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', imageFile);

      const response = await axios.post('http://localhost:8080/shop/product/create/', formData);

      if (response && response.data) {
        // You can add additional logic here, such as clearing the input fields or showing a success message.
        console.log('Product created:', response.data);
      } else {
        console.error('Error creating product: Invalid response format');
        // Handle the case where the response or response.data is not as expected.
      }
    } catch (error) {
      console.error('Error creating product:', error.message);
      // Handle error, e.g., show an error message to the user.
    }
  };


  const boxStyle = {
    width: '30%',
    height: `280px`,
    position: 'relative',
    marginTop: '8%',
    marginLeft: '32%',
    backgroundColor: '#adadad',
    padding: '10px',
    borderRadius: '10px'
  };

  const buttonStyle = {
    width: '35%',
    height: `25px`,
    borderRadius: '30px',
    position: 'relative',
    marginTop: `6%`,
    marginLeft: '25%',
    marginRight: '25%',
    backgroundColor: '#138324',
    padding: '10px',
    margin: '0 auto',
  };


  const containerinputStyle = {
    position: 'relative',
    width: '170px',
    height: '20px',
    marginTop: '9px',
    marginRight: '8px',
    borderRadius: '30px',
    padding: '15px',
    background: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  };

  const backgroundStyle = {
    backgroundImage:`url(${productBack})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
  };

  const textStyle= {
    marginLeft: '34%',
    marginTop: '1%'
  };


  return (
    <div style={backgroundStyle}>
      <Navbar/>
      <div style={boxStyle}>
    <div>
      <h2 style={textStyle}>Seller Home</h2>

      <div>
        <label style={textStyle} htmlFor="productName">Product Name:</label>
        <div style={containerinputStyle}>
        <input type="text" id="productName" value={name} onChange={handleNameChange} />
      </div>
      </div>

      <div>
        <label style={textStyle} htmlFor="productImage">Product Image:</label>
        <div style={containerinputStyle}>
        <input type="file" id="productImage" onChange={handleImageChange} />
      </div>
      </div>

      <div>
        <div style={buttonStyle}>
        <button onClick={handleCreateProduct}>Create Product</button>
      </div>
      </div>

    </div>
    </div>
    </div>

        );
};

export default CreateProduct;
