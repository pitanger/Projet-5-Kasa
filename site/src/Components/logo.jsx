import React from 'react';
import logo from '../images/logo.png';

const Logo = () => {
    return (
        <div className="header__logo-container">
        <img src={logo} className="logo" alt="logo Kasa" />
        </div>
    );
}

export default Logo;
