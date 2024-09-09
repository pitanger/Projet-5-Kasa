import React from "react";

const Banniere = ({ text, image }) => {
    return (
        <div className="banner">
            <img src={image} className="banner__background" alt="Bannière" />
            {text && <div className="banner__text">{text}</div>}
        </div>
    );
}

export default Banniere;