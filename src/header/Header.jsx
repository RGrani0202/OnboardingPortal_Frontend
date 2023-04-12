import React from "react";
import './Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PopUp from "../Popup/PopUp";



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
            <img src="https://th.bing.com/th/id/R.d8d1c9697efe0197ea71cfe611f4ddd2?rik=oputv6YhG18P8Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZsEnpy0pmPs%2fU4cQJaLcA7I%2fAAAAAAAAAGc%2fvmE_VSriiq4%2fs1600%2fhcl_logo.png&ehk=BE%2fIhFCdT2BosMXRqzZxpOTfdu84BRwBuzQkSCY2cWY%3d&risl=&pid=ImgRaw&r=0" width="2000" 
     height="2000"alt="" />
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <PopUp flag={open} handleCallBack={handleClose}/>
            <li className="nav-item">
              <NavLink
                className="nav-links"
                onClick={handleClickOpen}
              >
                Chat With Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                AboutUs
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
