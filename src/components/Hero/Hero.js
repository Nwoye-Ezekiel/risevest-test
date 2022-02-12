import React from "react";
import "./Hero.css";
import AppStore from "./assets/app-store-button.svg";
import GooglePlay from "./assets/google-play-button.svg";
import Phone from "./assets/Phone.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Dollar investments that help you grow</h2>
        <p>
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>
        <div className="hero-buttons">
          <img src={AppStore} alt="app-store-button" />
          <img src={GooglePlay} alt="google-play-button" />
        </div>
      </div>
      <div className="hero-image">
        <img src={Phone} alt="phone" />
      </div>
    </div>
  );
}
