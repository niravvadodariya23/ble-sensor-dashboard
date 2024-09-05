import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'; 

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidenav ${isOpen ? 'open' : ''}`}>
        <span className="closebtn" onClick={toggleNav}>&times;</span>
        <Link to="/" className="nav-link">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/sensors" className="nav-link">
          <i className="fas fa-tachometer-alt"></i> Sensor Data
        </Link>
        <Link to="/about-us" className="nav-link">
          <i className="fas fa-info-circle"></i> About Us
        </Link>
        <Link to="/contact-us" className="nav-link">
          <i className="fas fa-envelope"></i> Contact Us
        </Link>
      </div>
      <div id="main">
        <span className="openbtn" onClick={toggleNav}>&#9776;</span>
      </div>
    </div>
  );
};

export default SideNav;
