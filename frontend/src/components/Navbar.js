// components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <div className = 'navPage'>
              <Link to="/" className = 'navPageLink'>Home</Link>  
            </div>
            <div className = 'navPage'>
              <Link to="/about" className = 'navPageLink'>About</Link>   
            </div>
            <div className = 'navPage'>
              <Link to="/contact" className = 'navPageLink'>Contact</Link>  
            </div> 
            <div className = 'navPage'>
                <Link to="/attendance" className = 'navPageLink'>Attendance</Link>
            </div>
            <div className = 'navPage'>
                <Link to="/resources" className = 'navPageLink'>Resources</Link>
            </div>
        </nav>
    );
}

export default Navbar;