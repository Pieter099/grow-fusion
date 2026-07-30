import React from "react";

import YouTube from "../Utils/YouTube.png";
import X from "../Utils/X.jpg.avif";
import Facebook from "../Utils/Facebook.png";

import "../Styles/contacts.css";

const Contacts = () => {
  return (
    <footer className="contact-footer">
  <div className="footer-container">
    <h2>Contact Us</h2>

    <p>
      If you have any queries or are experiencing issues with this site,
      please contact us.
    </p>

    <p>
      Email:
      <a href="mailto:grow-fusion@gmail.com">
        {" "}
        grow-fusion@gmail.com
      </a>
    </p>

    <h3>Follow us on</h3>

    <p>
      If you want to hear more from us, you can follow us below.
    </p>

    <figure>
      <a href="/">
        <img src={YouTube} alt="YouTube" className="social" />
      </a>

      <a href="/">
        <img src={X} alt="X" className="social" />
      </a>

      <a href="/">
        <img src={Facebook} alt="Facebook" className="social" />
      </a>
    </figure>
  </div>
</footer>
  );
};

export default Contacts;
