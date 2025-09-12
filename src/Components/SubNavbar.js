import React from "react";
import "../Styles/subNavbar.css";

const SubNavbar = () => {
    return (
        <nav className="sub-navbar">
          <ul>
            <li>
              <a href="#crop-price">Crop Prices</a>
            </li>
            <li>
              <a href="#crop-info">Crop Info</a>
            </li>
            <li>
              <a href="#crop-calender">Crop Calender</a>
            </li>
            <li>
              <a href="#soil-prep">Soil Prep</a>
            </li>
            <li>
              <a href="#crop-treatment-info">Crop Treatment Info</a>
            </li>
            <li>
              <a href="#crop-treatment-steps">Crop Treatment Steps</a>
            </li>
          </ul>
        </nav>
    )
}

export default SubNavbar;