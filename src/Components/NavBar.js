import React from "react";
import "../Styles/navbar.css";

const MainNavBar = () => {
  return (
    <nav>
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
      </ul>
    </nav>
  );
};

export default MainNavBar;