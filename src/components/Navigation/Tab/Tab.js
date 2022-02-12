import React from "react";
import "./Tab.css";

const Tab = ({ title, active = false, onClick, droplist }) => {
  return (
    <div onClick={onClick} className={`tab ${active && "bold"}`}>
      <span className={`${active ? "active" : "inactive"}`}>{title}</span>
    </div>
  );
};

export default Tab;
