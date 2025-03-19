import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About Us</Link>
        </li>
        <li>
          <Link href="#main">Farm Info</Link>
        </li>
        <li>
          <Link href="#contact">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;