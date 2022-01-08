import React from "react";
import "./App.css";
import ProductListings from "./components/productListings";
import ProductDetail from "./components/productDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListings />} />
        <Route path="/products/:id" element={<ProductDetail />} /> 
      </Routes>
    </div>
  );
}

export default App;
