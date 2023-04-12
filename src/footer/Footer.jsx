import React from "react";
import './Footer.css';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Diversity1Sharp } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <footer className="footerDiv">
      <img className="footerLogo" src="https://th.bing.com/th/id/R.a2a3dc14c32e5a6e40a4ae3ce37b42f9?rik=%2fjYw7KiD1dcHNg&riu=http%3a%2f%2fgpcalour.com%2fwp-content%2fuploads%2f2017%2f06%2fHCL-1170x568.png&ehk=bAKtYdVlhZd4eub5kPiJca56MbozDsaINfYEAkTDraE%3d&risl=&pid=ImgRaw&r=0"  width="200" 
     height="30"alt="" />

      <p className="footerPara">© 1994-2023 HclTech.</p>
      <div className="footerShareIcon">
        <Link  className="shareIcon"><TwitterIcon /></Link>
        <Link className="shareIcon"><FacebookIcon /></Link>
        <Link className="shareIcon"><LinkedInIcon /></Link>
        <Link className="shareIcon"><YouTubeIcon /></Link>
      </div>
      <ul className="footerList">
        <li>Privacy</li>
        <li>Terms</li>
        <li>Site Map</li>
      </ul>
    </footer>



  );

}
export default Footer;