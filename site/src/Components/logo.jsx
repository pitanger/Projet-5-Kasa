import React from 'react';
import logo from '../images/logo.png';  // Assurez-vous que le chemin vers l'image est correct

const Logo = () => {
    return (
        <div className="conteneur-logo">
        <img src={logo} className="logo" alt="logo Kasa" />
        </div>
    );
}

export default Logo;
