import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Home from './component/Home';
import CustomerLogin from './component/CustomerLogin';
import SellerLogin from './component/SellerLogin';
import CustomerHome from './component/CustomerHome';
import SellerHome from './component/SellerHome'; 
import CreateProduct  from './component/CreateProduct' 
import CreateSellingProduct  from './component/CreateSellingProduct' 
import Products  from './component/products'
import SellingProducts from  './component/SellingProducts'
import Cart from  './component/Cart'
import EditSellingProduct from  './component/EditSellingProduct'
import DepositHistory from  './component/DepositHistory'
import DeleteFromCart from  './component/DeleteFromCart'
import BuyHistory from  './component/BuyHistory'
import Balance from  './component/Balance'
import AddToCart from  './component/AddToCart'
import Buy from  './component/Buy'
import EditCartProduct from  './component/EditCartProduct'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/customerlogin" element={<CustomerLogin />} />
      <Route path="/sellerlogin" element={<SellerLogin />} />
      <Route path="/customerhome" element={<CustomerHome />} />
      <Route path="/sellerhome" element={<SellerHome />} />
      <Route path="/createproduct" element={<CreateProduct/>} />
      <Route path="/createsellingproduct" element={<CreateSellingProduct/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/sellingproduct" element={<SellingProducts/>} />
      <Route path="/cart" element={<Cart/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
