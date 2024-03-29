import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import ProductPage from './components/Productpage'; // Import the ProductPage component
import Login from './components/LoginPage'; // Import the Login component
import Signup from './components/signup';
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} /> {/* Add a route for the ProductPage */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
