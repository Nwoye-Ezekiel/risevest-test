import React from "react";
import "./CTA.css";
import AppStore from "./assets/app-store-button.svg";
import GooglePlay from "./assets/google-play-button.svg";
import Phone from "./assets/Phone.png";

export default function CTA() {
  return (
    <div className="CTA-container">
      <div className="CTA-content">
        <h5>Download The Rise App</h5>
        <h3>Join our 100,000 users investing and setting long term goals!</h3>
        <p>Dollar investments that help you grow.</p>
        <div className="CTA-buttons-container">
          <img src={AppStore} alt="" />
          <img src={GooglePlay} alt="" />
        </div>
      </div>
      <img className="CTA-image" src={Phone} alt="" />
    </div>
  );
}
