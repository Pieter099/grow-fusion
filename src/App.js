import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/app.css";
import MainNavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUp-page";

function AppContent() {

  const location = useLocation();

  return (
    <>
    <Router>
      {location.pathname !== "/signup" && <MainNavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
};

export default App;