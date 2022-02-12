import React, { useState } from "react";
import "./Navigation.css";
import Logo from "./assets/logo.svg";
import Hamburger from "./assets/hamburger.svg";
import Tab from "./Tab/Tab";
import { tabs } from "./tabs.js";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="navigation-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="mobile-navigation">
        <div onClick={handleNav} className="hamburger">
          <img src={Hamburger} alt="logo" />
        </div>
      </div>
      <div className="desktop-navigation">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            title={tab.title}
            key={index}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
            droplist={tab.droplist}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
