import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import "./app.css";
import NavBar from "./Navbar";
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
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h2>About Us:</h2>} />
        <Route path="/main" element={<h2>Farming Information</h2>} />
        <Route path="/contact" element={<h2>Contact Us:</h2>} />
      </Routes>
    </Router>
  );
};

export default App;