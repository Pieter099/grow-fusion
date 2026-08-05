import React from "react";
import { Link } from "react-router-dom";
import "../Styles/signUp-page.css"
import SignUp from "../Features/SignUp";

const SignUpPage = () => {
    return (
      <>
        <section className="sign-up-header">
            <Link to="/">
              <button className="home-btn">Home</button>
            </Link>
          <h2>Create Your GrowFusion Account!</h2>
        </section>
        <section className="sign-up-page">
            <section className="sign-up-card">
              <h1>Grow Smarter with GrowFusion!</h1>
              
              <p>
                Join GrowFusion and access essential farming tools in one place. Stay updated with accurate weather forecasts, crop information, agricultural insights, and the latest crop prices. Create your account today and start growing smarter with GrowFusion.

              </p>
              <SignUp />
            </section>   
        </section>
      </>
    )
}

export default SignUpPage;