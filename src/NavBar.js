import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/about">About Us</link>
        </li>
        <li>
          <link to="/main">Farm Info</link>
        </li>
        <li>
          <link to="/contact">Contacts</link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
