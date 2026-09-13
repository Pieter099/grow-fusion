import React from "react";
import headImage from "../Images/headImage.webp";
import "../Styles/home.css";

const Home = () => {
  return (
      <section className="head" id="home">
        <img 
          src={headImage} 
          alt="farming" 
          className="mainImg" 
          width="100%"
          height="auto"
        />
        <div className="mainText">
          <h1 className="mainHeading">GrowFusion</h1>
          <p className="mainSubHeading">
            "Farming smarter with Real-Time insights!"
          </p>
        </div>
      </section>
  );
};

export default Home;