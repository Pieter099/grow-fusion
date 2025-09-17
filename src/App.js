import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/app.css";
import MainNavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUp-page";


const App = () => {
  return (
    <Router>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;