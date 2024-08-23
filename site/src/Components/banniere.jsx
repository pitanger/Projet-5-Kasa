import React from "react";
import background from '../images/Maskgroup.png';


const Banniere = () => {
    return (
        <div className="banner-wrap">
          <img src={background} className="background" alt="vue rochers" />
          <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
    );
}

export default Banniere