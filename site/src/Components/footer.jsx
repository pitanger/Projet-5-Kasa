import React from "react";
import Logobw from '../images/logobw.png';

const Footer = () => {
    return (
        <div className="footer">
          <img src={Logobw} className="logobw" alt="logo Kasa noir blanc" />
          <div className="allrire">© 2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer