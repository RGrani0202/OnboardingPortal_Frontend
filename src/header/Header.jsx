import React from "react";
import PopUP from "../ChatComponents/Popup";
import './Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/supercharging-logo.svg";


const Header = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);}

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src={Logo} alt="" />
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                to="/home"
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
              <PopUP  flag={open} handleCallBack={handleClose} />
            </li>
            <li className="nav-item">
              <NavLink

                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                 to='/Popup'
                className="nav-links" 
                onClick={handleClickOpen}
              >
                Chat With Us
              </NavLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>


  );

}
export default Header;
