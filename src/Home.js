import React from "react";
import headImage from "./headImage.webp";
import "./home.css";

const Home = () => {
  return (
    <div className="body">
      <header className="head" id="home">
        <img src={headImage} alt="farming" className="mainImg" />
        <p className="mainHeading">GrowFusion</p>
        <section className="box">
          <p className="mainSubHeading">
            "Farming smarter with Real-Time insights!"
          </p>
        </section>
      </header>
    </div>
  );
};

export default Home;