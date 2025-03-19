import React from "react";

import YouTube from "./YouTube.png";
import X from "./X.jpg.avif";
import Facebook from "./Facebook.png";

import "./contacts.css";

const Contacts = () => {
  return (
    <footer>
      <h2>Contact Us:</h2>
      <p>
        If you have any queries or having some issues on this site, please
        contact us via.
      </p>
      <p>
        Email: <a href="mailto:agri-usa@gmail.com">agri-usa@gmail.com</a>
      </p>
      <h3>Follow us on:</h3>
      <p>If you want to hear more from us, you can follow us at... .</p>
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
    </footer>
  );
};

export default Contacts;
