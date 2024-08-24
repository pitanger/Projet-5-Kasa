import React from "react";

const Banniere = ({ text, image }) => {
    return (
        <div className="banner-wrap">
            <img src={image} className="background" alt="Bannière" />
            {text && <div className="banner-text">{text}</div>}
        </div>
    );
}

export default Banniere;