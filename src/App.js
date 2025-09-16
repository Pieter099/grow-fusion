import React from "react";
import "./Styles/app.css";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUp-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;