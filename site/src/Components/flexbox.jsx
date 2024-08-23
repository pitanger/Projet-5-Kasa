import React from "react";
import Box from "../Components/box.jsx";
import Data from "./data.jsx";

const Flexbox = () => {
  return (
    <div className="flexbox">
      {Data.map((logement) => (
        <Box key={logement.id} text={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
};

export default Flexbox;
