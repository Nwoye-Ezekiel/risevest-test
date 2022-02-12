import React from "react";
import Logo from "./assets/logo-black.svg";
import Arrow from "./assets/arrow.svg";
import { footerDetails } from "./footerDetails.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <img className="footer-logo" src={Logo} alt="logo" />
        <div className="footer-lists">
          {footerDetails["company"].map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
      <div className="footer-section">
        <h3>Explore</h3>
        <div className="footer-lists">
          {footerDetails["explore"].map((item) => (
            <li>
              {item}
              <img className="arrow-up" src={Arrow} alt="arrow" />
            </li>
          ))}
        </div>
      </div>
      <div className="footer-section">
        <h3>Products</h3>
        <div className="footer-lists">
          {footerDetails["products"].map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <div className="footer-lists">
          {footerDetails["contactUs"].map((item) => (
            <li>
              {item}
              <img className="arrow-up" src={Arrow} alt="arrow" />
            </li>
          ))}
        </div>
      </div>
    </footer>
  );
}
