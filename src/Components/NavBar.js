import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const MainNavBar = () => {

  const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <nav className="main-navbar">
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={openMenu ? "nav-links active" : "nav-links"}>
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
          <Link to="/signup" onClick={() => setOpenMenu(false)}>
            <button>Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;