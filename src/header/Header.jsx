import React from "react";
import './Header.css';
import PopUP from '../chatComponents/Popup'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/hcltech-new-logo - Copy.svg'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



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
            <img src={logo} alt="" />
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
            {/* <Dialog
            className="chatDialogBox"
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"This is Ofline Chat"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Hyy there
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button id="sid" onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog> */}
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
              <PopUP flag={open} handleCallBack={handleClose} />

            </li>
            <li className="nav-item">
              <NavLink

                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
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
