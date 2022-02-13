import React from "react";
import "./CustomerCard.css";

export default function CustomerCard({ children, src, name, role = null }) {
  return (
    <div className="customer-card-container">
      <p className="customer-comment">{children}</p>
      <div className="customer-info">
        <img src={src} alt="" />
        <div className="customer-details">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}
