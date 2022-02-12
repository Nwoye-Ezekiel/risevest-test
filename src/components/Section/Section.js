import React from "react";
import Arrow from "./assets/arrow-right.svg";
import "./Section.css";

export default function Section({ src, header, children, orientate = false }) {
  return (
    <div className={`section-container ${orientate ? "orientate" : "no-orientate"}`}>
      <div className="section-content">
        <h3>{header}</h3>
        <p>{children}</p>
        <p>
          Start Investing Now <img src={Arrow} alt="arrow" />
        </p>
      </div>
      <div className="section-image">
        <img src={src} alt={`${src}`} />
      </div>
    </div>
  );
}
