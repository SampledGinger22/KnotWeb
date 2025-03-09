import React from 'react';
import '../style/Construction.css';
import CastleImage from '../assets/Castle.jpg';
import Logo from '../assets/Logo.png';

const Construction = () => {
    return (
        <div className='container'>
            <img src={CastleImage} alt="Castle" className='backgroundImg' />
            <div className='overlay'>
                <div className='logo-container'>
                    <img src={Logo} className='logo'/>
                    <h1>Website Under Construction</h1>
                </div>
                <p className='summary'>In the meantime, please check out our <a href="https://www.youtube.com">YouTube</a> or <a href="https://www.example.com/signup">Sign Up for our Mail List</a></p>
            </div>
        </div>
    );
};

export default Construction;