import React from 'react';
import '../style/Header.css';
import CastleImage from '../assets/Castle.jpg';
import Logo from '../assets/Logo.png';
import Give from './Give';

const Header = ({ isGiveVisible, toggleGivePopup }) => {
  return (
    <div className='container'>
      <div className='upperHeader'>
        <div className='title'>
          <h1>Castle</h1>
          <h2>Hotel</h2>
        </div>
        <div className='contact'>
          <p>123-456-7890</p>
        </div>
        <div className='nav'>
          <button onClick={toggleGivePopup}>Give Now</button>
          <a href='#'>Serve With Us</a>
        </div>
      </div>
      <div className='lowerHeader'>
        <img src={Logo} className='logo' />
        <div className='nav'>
          <a href='#'>Mission & Vision</a>
          <a href='#'>Our Values</a>
          <a href='#'>Our Faith</a>
          <a href='#'>What We Do</a>
          <a href='#'>Contact Us</a>
        </div>
      </div>
      <img src={CastleImage} alt="Castle" className='backgroundImg' />
      <Give isVisible={isGiveVisible} onClose={toggleGivePopup} />
    </div>
  );
};

export default Header;