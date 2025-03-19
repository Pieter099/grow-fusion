import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/main">Farm Info</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;