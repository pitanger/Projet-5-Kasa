import React from "react";

const Banniere = ({ text, image }) => {
    return (
        <div className="banner-wrap">
            <img src={image} className="main__background" alt="Bannière" />
            {text && <div className="main__banner-text">{text}</div>}
        </div>
    );
}

export default Banniere;