import React, { useState } from "react";
import "./Navigation.css";
import Logo from "./assets/logo.svg";
import Hamburger from "./assets/hamburger.svg";
import Tab from "./Tab/Tab";
import { tabs } from "./tabs.js";
import Arrow from "./Tab/assets/arrow-down.svg";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const [showDroplist, setShowDroplist] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  const handleDroplist = () => {
    setShowDroplist(!showDroplist);
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

      {openNav && (
        <div className="mobile-links">
          <div className="mobile-links-header">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div onClick={handleNav} className="close-mobile-nav">
              <span></span>
              <span></span>
            </div>
          </div>
          {tabs.map((tab, index) => {
            const droplist = tab.droplist;
            return (
              <div>
                <li
                  className="mobile-link"
                  onClick={droplist ? handleDroplist : null}
                  key={index}
                >
                  {tab.title} {droplist && <img src={Arrow} alt="" />}
                </li>
                {droplist &&
                  showDroplist &&
                  droplist.map((list, index) => (
                    <li className="mobile-sub-link" key={index}>
                      {list}
                    </li>
                  ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
