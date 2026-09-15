import React from "react";
import GrowFusion_Logo from "../Assets/GrowFusion_Logo.svg";
import "../Styles/about.css";

const AboutInfo = () => {
  return (
    <div className="description">
      <h2 className="about-heading">About Grow Fusion</h2>
      <section className="logo-and-summary">
        <picture className="logo-box">
          <img src={GrowFusion_Logo} alt="site-logo" className="logo-img" loading="lazy" />
        </picture>
        <div className="about-summary">
          <p>
             Grow Fusion is a modern agricultural information platform designed to help farmers, students, researchers, and agricultural enthusiasts make informed decisions through accessible and easy-to-understand farming information. The platform brings together essential agricultural resources, including crop information, farming guides, seasonal insights, and educational content in one convenient location. As Grow Fusion continues to evolve, it will also provide real-time weather forecasts, live crop market prices, and interactive tools to support smarter, more sustainable farming practices. Our goal is to combine technology and agriculture into a user-friendly experience that empowers users with reliable information whenever they need it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutInfo;