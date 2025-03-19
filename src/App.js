import React from "react";
import * as ReactRouterDOM from "react-router-dom";
const { BrowserRouter: Router, Route, Routes } = ReactRouterDOM;
import headImage from "./headImage.webp";
import "./app.css";

import NavBar from "./Navbar";
import Home from "./Home";
import AboutInfo from "./About";
import FarmInfo from "./FarmingInfo";
import Contacts from "./Contacts";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h2>About Us:</h2>} />
        <Route path="/main" element={<h2>Farming Information</h2>} />
        <Route path="/contact" element={<h2>Contact Us:</h2>} />
      </Routes>
    </Router>
  );
};

export default App;