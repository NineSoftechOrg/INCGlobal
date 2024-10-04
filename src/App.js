// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer';
import Contact from './components/Contact'; // Import your Contact component
import Home from './Home'; // Import your Home component
import Signin from './components/Signin';
import Company from './components/Company';
import Services from './components/Services';

const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Your Home component */}
        <Route path="/contact" element={<Contact />} /> {/* Separate Contact page */}
        <Route path="/Signin" element={<Signin />} /> {/* Separate Contact page */}
        <Route path="/Company" element={<Company />} /> {/* Separate Contact page */}
        <Route path="/Services" element={<Services />} /> {/* Separate Contact page */}
        </Routes>
      {/* <Footer /> */}
    </Router>
    </div>
  );
};

export default App;