import React from "react";
import headImage from "../Images/headImage.webp";
import headImageMobile from "../Images/headImageMobile.webp";
import "../Styles/home.css";

const Home = () => {
  return (
      <section className="head" id="home">
        <img 
          src={headImage}
        srcSet={`${headImageMobile} 1024w, ${headImage} 1792w`}
        sizes="100vw"
        alt="Farming landscape"
        className="mainImg"
        width="1792"
        height="1024"
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