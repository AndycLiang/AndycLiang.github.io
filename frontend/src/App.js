
// Filename - App.js
 
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Attendance from "./pages/attendance.js"
import Resources from "./pages/resources"

import clubsImage from "./clubsImage.png"
import diamondImage from "./diamondImage.png"
import heartImage from "./heartImage.png"
import spadeImage from "./spadeImage.png"

import './App.css'
 
function App() {
  return (
      <Router>
        <div className = 'headerContainer'>
            <img src = {clubsImage} alt = "cardImage" className = "image"/>
            <img src = {diamondImage} alt = "cardImage" className = "image"/>
            <h1 className = 'header'> <span style={{color: 'rgb(255,144,7)'}}>HOOS</span> PLAYING BRIDGE</h1>
            <img src = {heartImage} alt = "cardImage" className = "image"/>
            <img src = {spadeImage} alt = "cardImage" className = "image"/>
        </div>

        <Navbar />
          
        <Routes>
          <Route index element={<Home />} />
          <Route path="/bridge-site" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>

        <Footer />

      </Router>
  );
}

export default App;
