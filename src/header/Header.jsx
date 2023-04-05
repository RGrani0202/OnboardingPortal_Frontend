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
                 <img src="https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg" alt="" />
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