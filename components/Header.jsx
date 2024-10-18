import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="main-header"> 
      <div id="icon">
        <a href="/" onClick={scrollToTop}><img src="rest_pics/logo.png" alt="Restaurant Logo" /></a>
      </div>
      <div id="navigation">
        <Link to="/about" className="page" onClick={scrollToTop} >ABOUT US</Link>
        <a className="page">|</a>
        
        <a href="#branch" className="page">OUR RESTAURANTS</a>
        <a className="page">|</a>
        
        <a href="#meghana" className="page">MENU</a>
        <a className="page">|</a>
        <a href="#details" className="page">CONTACT US</a>
        <a className="page">|</a>
        <Link to="/gift" className="page" onClick={scrollToTop}>GIFT CARD</Link>
      </div>
    </div>
  );
};

export default Header;
