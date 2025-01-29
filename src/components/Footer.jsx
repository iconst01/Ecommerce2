import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>&copy; 2024 HEALTHEQUIP. All rights reserved.</h3>
        <h4>Follow us on social media:</h4>
        <div className="social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} /> 
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} /> 
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

