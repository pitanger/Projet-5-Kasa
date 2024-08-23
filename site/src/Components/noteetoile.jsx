import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Data from "./data.jsx";

const Etoiles = ({ rating }) => {
  const maxetoiles = 5;
  const etoiles = [];

  for (let i = 0; i < maxetoiles; i++) {
    etoiles.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: i < rating ? "#ff6060" : "#e3e3e3" }}
      />
    );
  }

  return <div>{etoiles}</div>;
};

const Note = ({ id }) => {
  const logement = Data.find(item => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <Etoiles rating={logement.rating} /> 
    </div>
  );
};

export default Note;
