import React from 'react';
import '../HackTheMoon.css'; 
import moon_image from '../assets/moon-image.png'

export const HackTheMoon = () => {
    return (
        <div className="container">
            <div className="content">
                <p className="date-location">January 17 - Shopify Toronto</p>
                <h1 className="title">Hack the Moon<span className="blinking-cursor">|</span></h1>
                <p className="subtitle">Aim for the moon, land on the stars.</p>
                <p className="coming-soon">Coming Soon</p>
            </div>
            <div className="moon-image">
                {/* You can place the moon image here */}
                <img src={moon_image} alt="Moon" />
            </div>
        </div>
    );
}
