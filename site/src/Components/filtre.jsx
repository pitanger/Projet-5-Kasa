import React from 'react';

const FiltresLogements = ({ tags }) => {
  return (
    <div className="conteneur-filtre">
      {tags.map((tag, index) => (
        <span key={index} className="filtre">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default FiltresLogements;
