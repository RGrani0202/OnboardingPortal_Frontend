import React from "react";
import './Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import SimpleModal from "../admincomponents/ModalComponent/SimpleModal";

const Header = (props) => {
console.log(props.paths);
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

            {props.paths==='/' || props.paths==='/signup'|| props.paths==='/login' || props.paths==='/admin'?<div></div>:
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                to="/user"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/menu"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <SimpleModal/>
            </li>
            {/* <li className="nav-item">
              <NavLink
              to="/chat"
              className="nav-links"
              onClick={handleClick}
              >Chat with us</NavLink>
            </li> */}
          </ul>}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );

}
export default Header;