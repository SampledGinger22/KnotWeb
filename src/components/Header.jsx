import React from 'react';
import '../style/Header.css';
import CastleImage from '../assets/Castle.jpg';
import Logo from '../assets/Logo.png';
import Give from './Give';

const Header = ({ isGiveVisible, toggleGivePopup }) => {
  return (
    <div>
      <img src={CastleImage} alt="Castle" className='backgroundImg' />
      <div className='container'>
        <div className='lowerHeader'>
          <img src={Logo} className='logo' />
          <div className='lowerNav'>
            <button onClick={toggleGivePopup}>Give Now</button>
            <a href='#'>Serve With Us</a>
            <a href='#'>Mission & Vision</a>
            <a href='#'>Our Values</a>
            <a href='#'>Our Faith</a>
            <a href='#'>What We Do</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
        <Give isVisible={isGiveVisible} onClose={toggleGivePopup} />
      </div>
    </div>
  );
};

export default Header;