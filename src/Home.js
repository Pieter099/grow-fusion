import React from "react";
import "./home.css";

const Home = () => {
  return (
    <body className="body">
      <header className="head" id="home">
        <NavBar />
        <img src={headImage} alt="farming image" className="mainImg" />
        <p className="mainHeading">Agri USA</p>
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