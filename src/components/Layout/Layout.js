import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navigation />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}
