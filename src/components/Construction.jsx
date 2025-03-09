import React from 'react';
import '../style/Construction.css';
import CastleImage from '../assets/Castle.jpg';

const Construction = () => {
    return (
        <div className='container'>
            <img src={CastleImage} alt="Castle" />
        </div>
    );
};

export default Construction;