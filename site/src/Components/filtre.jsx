import React from 'react';

const FiltresLogements = ({ tags }) => {
  return (
    <div className="filter__container">
      {tags.map((tag, index) => (
        <span key={index} className="filter__item">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default FiltresLogements;
