import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="desktop-view">
        <FontAwesomeIcon icon={faHome} className="icon1" />
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
      </div>
      <div className="mobile-view">
        <a href="#home">
          <FontAwesomeIcon icon={faHome} className="icon1" />
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
        <a href="#search">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </a>
        <a href="#notification">
          <FontAwesomeIcon icon={faBell} className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
