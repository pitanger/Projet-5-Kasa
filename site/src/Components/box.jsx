import React from "react";
import { Link } from "react-router-dom";

const Box = ({ id, text, cover }) => {
  const Boxbackground = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%), url(${cover})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    flex: 1,
    height: "100%", 
    width: "100%",
    borderRadius: "10px",
  };

  return (
    <div className="Box-container">
      <Link to={`/logement/${id}`}>
        <div className="box" style={Boxbackground}>
          <div className="box__text">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default Box;
