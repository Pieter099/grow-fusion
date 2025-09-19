import React from "react";
import { Link } from "react-router-dom";
import signUpImg from "../Utils/signUpImg.jpg";
import "../Styles/signUp-page.css"
import SignUp from "../Components/SignUp";

const SignUpPage = () => {
    return (
        <body>
            <section className="sign-up-header">
              <Link to="/">
                <button className="home-btn">Home</button>
              </Link>
              <h2>Sign up and join GrowFusion Today!</h2>
            </section>
            <picture className="sign-up-picture">
              <img src={signUpImg} alt="farmers" className="sign-up-img"/>
            </picture>
            <summary>
              <p>
                GrowFusion is a community dedicated to sustainable farming practices and connecting farmers with consumers.
                By signing up, you'll gain access to a wealth of resources, expert advice, and a supportive network of 
                like-minded individuals. Whether you're a seasoned farmer or just starting out, GrowFusion has something 
                to offer everyone. Join us today and be part of the movement towards a more sustainable future!
                You will also receive the latest prices on crop values. 
              </p>
            </summary>
            <section className="sign-up-form">
              <SignUp />
            </section>   
        </body>
    )
}

export default SignUpPage;