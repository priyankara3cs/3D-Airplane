import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo1">3D Car</div>
        <div className="burger-menu" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="/services/">Services</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
