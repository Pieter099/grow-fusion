import React from "react";
import Logo from "../Utils/Logo.jpg"
import "../Styles/about.css";

const AboutInfo = () => {
  return (
    <div className="description">
      <h2>About Us!</h2>
      <section className="logo-and-summary">
        <picture className="logo-box">
          <img src={Logo} alt="site-logo" className="logo-img"/>
        </picture>
        <summary>
          <p>
            AgriUSA – Farming Smarter with Real-Time Insights AgriUSA is your
            go-to platform for the latest agricultural data, including real-time
            crop prices, market trends, and essential farming insights. Designed
            to empower farmers, traders, and agribusinesses, AgriUSA provides
            up-to-date information to help make informed decisions, improve
            productivity, and maximize profits. Stay ahead in the agricultural
            industry with reliable, data-driven insights—all in one place.
          </p>
        </summary>
      </section>
    </div>
  );
};

export default AboutInfo;