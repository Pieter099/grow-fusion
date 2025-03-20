import React from "react";
import "./app.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import FarmInfo from "./FarmingInfo";
import Contacts from "./Contacts";

const App = () => {
  return (
    <div>
      <NavBar />
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
    </div>
  );
};

export default App;