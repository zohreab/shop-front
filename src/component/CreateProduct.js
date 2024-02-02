import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

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

  return (
    <div>
      <h1>Seller Home</h1>

      <div>
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label htmlFor="productImage">Product Image:</label>
        <input type="file" id="productImage" onChange={handleImageChange} />
      </div>

      <div>
        <button onClick={handleCreateProduct}>Create Product</button>
      </div>
    </div>
  );
};

export default CreateProduct;
