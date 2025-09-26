import React from "react";
import headImage from "../Utils/headImage.webp";
import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="head" id="home">
        <img src={headImage} alt="farming" className="mainImg" />
        <h1 className="mainHeading">GrowFusion</h1>
        <section className="box">
          <p className="mainSubHeading">
            "Farming smarter with Real-Time insights!"
          </p>
        </section>
      </section>
    </div>
  );
};

export default Home;