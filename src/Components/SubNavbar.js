import React from "react";
import "../Styles/subNavbar.css";

const SubNavbar = () => {
    return (
        <nav className="sub-navbar" aria-label="Farm information navigation">
          <ul>
            <li>
              <a href="#crop-price">Crop Prices</a>
            </li>
            <li>
              <a href="#crop-info">Crop Info</a>
            </li>
            <li>
              <a href="#crop-calender">Crop Calendar</a>
            </li>
            <li>
              <a href="#soil-prep">Soil Prep</a>
            </li>
            <li>
              <a href="#crop-treatment-info">Crop Care</a>
            </li>
            <li>
              <a href="#crop-treatment-steps">Treatment Steps</a>
            </li>
          </ul>
        </nav>
    )
}

export default SubNavbar;