import React from "react";
import Arrow from "./assets/arrow-right.svg";
import "./AssetCard.css";

export default function AssetCard({
  title,
  children,
  returns,
  riskLevel,
  color,
  src,
}) {
  return (
    <div className="asset-card-container">
      <div
        className="asset-card-color"
        style={{ background: `${color}` }}
      ></div>
      <div className="asset-image-container">
        <img src={src} alt="" />
      </div>
      <div className="asset-card-content">
        <h3>{title}</h3>
        <p>{children}</p>
        <p>
          <span>Historical returns:</span> {returns}
        </p>
        <p>
          <span>Risk Level:</span> {riskLevel}
        </p>
        <p>
          Learn how {title} work <img src={Arrow} alt="arrow" />
        </p>
      </div>
    </div>
  );
}
