import React from "react";
import "./Button.css";

export default function Button({ children, className }) {
  return <button className={`${className}`}>{children}</button>;
}
