import React from "react";
import { Link } from "react-router-dom";
import "../Styles/homepage.css";
import MainNavBar from "../Components/NavBar";
import Home from "../Components/Home";
import About from "../Components/About";
import FarmInfo from "../Components/FarmingInfo";
import Contacts from "../Components/Contacts";

const HomePage = () => {
  return (
    <body>
      <MainNavBar />
      <Link to="/signup">
        <button className="sign-up-btn">Sign Up</button>
      </Link>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="main">
        <FarmInfo />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </body>
  );
};

export default HomePage;