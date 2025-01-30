import React from "react";//import react library
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";//import social media icons from react-icons 
import "./../styles/Footer.css";//import custom style for the footer

const Footer = () => {
  return (
    <footer>{/*footer section*/}
      <div className="footer-content">{/*wrapper for footer content*/}
        <h3>&copy; 2024 HEALTHEQUIP. All rights reserved.</h3>
        <h4>Follow us on social media:</h4>
        <div className="social-links">{/*container for social media links*/}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} /> {/*instangram icon with size 30*/}
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} /> {/*twitter icon */}
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} /> {/*facebook icon*/}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;//exporting footer component for use in other parts of the application

