import { useState } from "react";//import useState hook to manage state
import { Link } from "react-router-dom";//import link component for navagation without page reload
import "./../styles/Navbar.css";//import custom styles for the navbar

const Navbar = () => {
  //state to track wether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">{/*navbar container*/}
      <div className="logo">{/*logo section*/}
        <img src="/images/logo.png" alt="Logo" width="100" /> {/*logo image*/}
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>{/*toggles menuOpen state*/}
        <div className={menuOpen ? "bar open" : "bar"}></div>{/*bar 1 */}
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}> {/*show menu when menuOpen is true*/}
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>{/*home link*/}
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>{/*products link*/}
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>{/*contact link */}
      </ul>
    </nav>
  );
};

export default Navbar;//exporting navbar component for use in other parts of the application
