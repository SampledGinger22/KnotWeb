import React from 'react';
import '../style/Header.css';
import CastleImage from '../assets/Castle.jpg';
import Logo from '../assets/Logo.png';
import Give from './Give';

const Header = ({ isGiveVisible, toggleGivePopup }) => {
  return (
    <div className="header-container">
      <img src={CastleImage} alt="Castle" className="backgroundImg" />
      <div className="top-overlay">
        <div className="logoContainer">
          <img src={Logo} className="logo" />
          <h1 className="header-title">GOD'S KNOT DEAD MINISTRIES</h1>
        </div>
        <div className="button-group"> {/* Wrap buttons in a div */}
          <button className="give-now-button" onClick={toggleGivePopup}>
            Donate
          </button>
          <a href="#" className="contact-us-button">Contact Us</a>
        </div>
      </div>
      <div className="lowerHeader"> {/* Moved lowerHeader directly under the image */}
        <div className="lowerNav">
          <a href="#">Serve With Us</a>
          <a href="#">Mission & Vision</a>
          <a href="#">Our Values</a>
          <a href="#">Our Faith</a>
          <a href="#">What We Do</a>
        </div>
      </div>
      <div className="container">
        <Give isVisible={isGiveVisible} onClose={toggleGivePopup} />
      </div>
    </div>
  );
};

export default Header;