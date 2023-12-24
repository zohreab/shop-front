import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Home from './component/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
