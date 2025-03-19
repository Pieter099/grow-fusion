import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import "./app.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import FarmInfo from "./FarmingInfo";
import Contacts from "./Contacts";

const { BrowserRouter: Router, Route, Routes } = ReactRouterDOM;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<FarmInfo />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;