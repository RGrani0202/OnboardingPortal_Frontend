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
      <img className="footerLogo" src="https://th.bing.com/th/id/R.d8d1c9697efe0197ea71cfe611f4ddd2?rik=oputv6YhG18P8Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZsEnpy0pmPs%2fU4cQJaLcA7I%2fAAAAAAAAAGc%2fvmE_VSriiq4%2fs1600%2fhcl_logo.png&ehk=BE%2fIhFCdT2BosMXRqzZxpOTfdu84BRwBuzQkSCY2cWY%3d&risl=&pid=ImgRaw&r=0" alt="master" />

      <p className="footerPara">© 1994-2023 HCLTech.</p>
      <div className="footerShareIcon">
        <Link className="shareIcon"><TwitterIcon /></Link>
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