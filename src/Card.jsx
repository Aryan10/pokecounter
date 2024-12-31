import React from 'react';
import './Card.css';

export const Card = ({ num, poke, found, viewAll }) => {
  const missingno = `https://play.pokemonshowdown.com/sprites/bwicons/0.png`;

  const getIcon = (poke) => {
    if (found[poke.num] === undefined) return missingno;
    return `https://play.pokemonshowdown.com/sprites/dex/${poke.id}.png`;
  };

  return (
    <div className="Card">
      <img src={getIcon(poke)} alt={poke.name} className="Card-icon" />
      <p className="Card-number">#{num}</p>
    </div>
  );
};
