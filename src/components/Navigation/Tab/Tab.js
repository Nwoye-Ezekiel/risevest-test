import React, { useState, useEffect, useRef } from "react";
import "./Tab.css";
import Arrow from "./assets/arrow-down.svg";

const Tab = ({ title, active = false, onClick, droplist = null }) => {
  const [showList, setShowList] = useState(false);
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowList(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
  };

  const handleShowList = () => {
    if (droplist) {
      setShowList(!showList);
    }
  };

  useOutsideAlerter(wrapperRef);

  return (
    <div onClick={onClick} className="tab">
      <span
        ref={wrapperRef}
        onClick={handleShowList}
        className={`${active && !droplist ? "active" : "inactive"}`}
      >
        {title}
        {droplist && <img src={Arrow} alt="" />}
        {droplist && showList && (
          <div className="droplist-container">
            {droplist.map((list) => (
              <li>{list}</li>
            ))}
          </div>
        )}
      </span>
    </div>
  );
};

export default Tab;
