import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { UserProvider } from './components/UserContext'; 
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Contact from './components/Contact'; 
import LoginPage from './components/LoginPage'; 
import './App.css'; 

const App = () => {
  return (
    <UserProvider> 
      <Router> 
        <Navbar />
        <div className="content">
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/login" element={<LoginPage />} /> 
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
