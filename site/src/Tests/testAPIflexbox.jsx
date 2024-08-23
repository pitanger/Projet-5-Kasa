import React, { useState, useEffect } from "react";
import Box from "../Components/box.jsx";

const Flexbox = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/data/logements.json")  // chemin relatif vers ton fichier local
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du fetch:", error));
  }, []);

  return (
    <div className="flexbox">
      {logements.map((logement, index) => (
        <Box key={index} text="Titre de la location" image={logement.cover} />
      ))}
    </div>
  );
};

export default Flexbox;
