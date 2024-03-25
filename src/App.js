import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import ProductPage from './components/Productpage'; // Import the ProductPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} /> {/* Add a route for the ProductPage */}
      </Routes>
    </Router>
  );
}

export default App;
