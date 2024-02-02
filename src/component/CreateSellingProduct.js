import React, { useState } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../service/auth';

const CreateSellingProduct = () => {
  const [productId, setProductId] = useState('');
  const [properties, setProperties] = useState('');
  const [color, setColor] = useState('TRS');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [stockCount, setStockCount] = useState(0);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handlePropertiesChange = (e) => {
    setProperties(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockCountChange = (e) => {
    setStockCount(e.target.value);
  };

  const handleCreateSellingProduct = async () => {
    try {
      // Set Authorization header with the access token
      setAuthHeaders(axios);

      const response = await axios.post('http://localhost:8080/shop/selling-product/create/', {
        product_id: productId,
        properties: properties,
        color: color,
        size: size,
        price: price,
        stock_count: stockCount,
      });

      if (response && response.data) {
        // You can add additional logic here, such as clearing the input fields or showing a success message.
        console.log('Selling Product created:', response.data);
      } else {
        console.error('Error creating Selling Product: Invalid response format');
        // Handle the case where the response or response.data is not as expected.
      }
    } catch (error) {
      console.error('Error creating Selling Product:', error.message);
      // Handle error, e.g., show an error message to the user.
    }
  };

  return (
    <div>
      <h1>Create Selling Product</h1>

      <div>
        <label htmlFor="productId">Product ID:</label>
        <input type="text" id="productId" value={productId} onChange={handleProductIdChange} />
      </div>

      <div>
        <label htmlFor="properties">Properties:</label>
        <input type="text" id="properties" value={properties} onChange={handlePropertiesChange} />
      </div>

      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={color} onChange={handleColorChange} />
      </div>

      <div>
        <label htmlFor="size">Size:</label>
        <input type="text" id="size" value={size} onChange={handleSizeChange} />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" value={price} onChange={handlePriceChange} />
      </div>

      <div>
        <label htmlFor="stockCount">Stock Count:</label>
        <input type="number" id="stockCount" value={stockCount} onChange={handleStockCountChange} />
      </div>

      <div>
        <button onClick={handleCreateSellingProduct}>Create Selling Product</button>
      </div>
    </div>
  );
};

export default CreateSellingProduct;
