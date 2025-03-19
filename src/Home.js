import React from "react";
import headImage from "./headImage.webp";
import "./home.css";

import NavBar from "./Navbar";

const Home = () => {
  return (
    <body className="body">
      <header className="head" id="home">
        <NavBar />
        <img src={headImage} alt="farming" className="mainImg" />
        <p className="mainHeading">GrowFusion</p>
        <section className="box">
          <p className="mainSubHeading">
            "Farming smarter with Real-Time insights!"
          </p>
        </section>
      </header>
    </body>
  );
};

export default Home;