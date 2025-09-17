import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const MainNavBar = () => {
  return (
    <nav className="main-navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#main">Farm Info</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
        <li>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;