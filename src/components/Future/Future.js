import React from "react";
import Button from "../Button/Button";
import "./Future.css";
import Goals from "./assets/goals.png";

export default function Future() {
  return (
    <div className="future-container">
      <div className="future-image">
        <img src={Goals} alt="" />
      </div>
      <div className="future-content">
          <h5>The Rise App</h5>
        <h1>Save for your <span>future</span></h1>
        <p>
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>
        <Button className="future-button">Start Saving</Button>
      </div>
    </div>
  );
}
