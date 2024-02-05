import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';
import productBack from "../img/ProductBack.png";
import Navbar from "./Navbar";

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState(null); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    
    setImageFile(e.target.files[0]);
  };

  const handleCreateProduct = async () => {
    try {
     
      setAuthHeaders(axios);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', imageFile);

      const response = await axios.post('http://localhost:8080/shop/product/create/', formData);

      if (response && response.data) {
        
        console.log('Product created:', response.data);
      } else {
        console.error('Error creating product: Invalid response format');
      
      }
    } catch (error) {
      console.error('Error creating product:', error.message);
     
    }
  };


  const boxStyle = {
    width: '30%',
    height: `310px`,
    position: 'relative',
    marginTop: '8%',
    marginLeft: '32%',
    backgroundColor: '#adadad',
    padding: '10px',
    borderRadius: '10px'
  };

  const buttonStyle = {
    borderRadius:'20px',
    width: '150px',
    padding: '10px' ,
    marginLeft:"98px",
    marginTop:"25px",
    backgroundColor:"green",
    color:"white"
  }


  const containerinputStyle = {
    position: 'relative',
    width: '150px',
    height: '20px',
    marginTop: '11px',
    marginLeft: '80px',
    borderRadius: '30px',
    padding: '15px',
    background: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backgroundStyle = {
    backgroundImage:`url(${productBack})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
  };

  const textStyle= {
    marginLeft: '25%',
    marginTop: '1%'
  };


  return (
    <div style={backgroundStyle}>
      <Navbar/>
      <div style={boxStyle}>
    <div>
      <h2 style={textStyle}>Create Product</h2>

      <div>
        <label style={textStyle} htmlFor="productName">Product Name:</label>
        <div>
        <input style={containerinputStyle} type="text" id="productName" value={name} onChange={handleNameChange} />
      </div>
      </div>

      <div>
        <label style={textStyle} htmlFor="productImage">Product Image:</label>
        <div>
        <input style={containerinputStyle} type="file" id="productImage" onChange={handleImageChange} />
      </div>
      </div>

      <div>
        <div>
        <button onClick={handleCreateProduct} style={buttonStyle}>Create Product</button>
      </div>
      </div>

    </div>
    </div>
    </div>

        );
};

export default CreateProduct;
