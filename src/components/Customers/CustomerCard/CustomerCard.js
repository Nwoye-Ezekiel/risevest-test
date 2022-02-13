import React from "react";
import "./CustomerCard.css";

export default function CustomerCard({ children, src, name }) {
  return (
    <div className="customer-card-container">
      <p>{children}</p>
      <div>
        <img src={src} alt="" />
        <span>{name}</span>
      </div>
    </div>
  );
}
