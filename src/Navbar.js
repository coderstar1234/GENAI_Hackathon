import React, { useState } from 'react';
import './App.css'; // Import CSS file

const Navbar = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1 style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', textAlign: 'right', color: '#333' }}>intel-ECom</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
