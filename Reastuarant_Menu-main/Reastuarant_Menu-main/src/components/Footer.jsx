import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
          
        </div>
        <p>©copyright: 2023 Indianfood.com</p>
    </div>
  )  
} 

export default Footer;