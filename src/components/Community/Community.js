import React from "react";
import "./Community.css";
import Button from "../Button/Button";
import CommunityImage from "./assets/community-image.png";

export default function Community() {
  return (
    <div className="community-container">
      <div className="community-image">
        <img src={CommunityImage} alt="" />
      </div>
      <div className="community-content">
        <h1>Join the Rise Community</h1>
        <p>
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <Button>Join our Community</Button>
      </div>
    </div>
  );
}
