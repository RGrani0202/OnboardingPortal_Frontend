import React from "react";
import './Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom" ;




const Header = () => {
    
const [click, setClick] = useState(false);
      
const handleClick = () => setClick(!click);
    
        return (
          <>
            <nav className="navbar">
              <div className="nav-container">
                <NavLink  to="/" className="nav-logo">
                 <img src="https://www.logolynx.com/images/logolynx/0b/0bf61bb3ece3d121adb09264efd4a1e4.jpeg" alt="" />
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
                     
                      to="/about"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      AboutUs
                    </NavLink>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink
                     
                      to="/"
                      className="nav-links"
                      onClick={
                      () => window.location.href = '/chatbot' }
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

