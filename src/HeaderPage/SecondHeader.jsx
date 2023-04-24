import React from "react";
import './SecondHeader.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SecondHeader = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src="https://www.hcltech.com/sites/default/files/images/special-pages/supercharging-progress/supercharging-logo.svg" alt="" />
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          {/* <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> */}
        </div>
      </nav>
    </>
  );

}
export default SecondHeader;
