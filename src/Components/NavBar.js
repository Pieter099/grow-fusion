import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const MainNavBar = () => {

  const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <nav className="main-navbar">
      <button 
        className="menu-toggle" 
        aria-label={openMenu ? "Close menu" : "Open menu"}
        aria-expanded={openMenu}
        aria-controls="main-navigation"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <FaTimes /> : <FaBars />}
      </button>
      <ul
        id="main-navigation" 
        className={openMenu ? "nav-links active" : "nav-links"}
      >
        <li>
          <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpenMenu(false)}>About Us</a>
        </li>
        <li>
          <a href="#main" onClick={() => setOpenMenu(false)}>Farm Info</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpenMenu(false)}>Contacts</a>
        </li>
        <li>
          <Link 
            to="/signup" 
            className="signup-btn"
            onClick={() => setOpenMenu(false)}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;