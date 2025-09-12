import React from "react";
import "../Styles/app.css";
import MainNavBar from "../Components/NavBar";
import Home from "../Components/Home";
import About from "../Components/About";
import FarmInfo from "../Components/FarmingInfo";
import Contacts from "../Components/Contacts";

const App = () => {
  return (
    <body>
      <MainNavBar />
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

export default App;