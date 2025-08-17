import React from 'react';

const BerryCard = ({ berry }) => {
  const flavors = berry.flavors.filter(flavor => flavor.potency > 0);

  return (
    <div className="berry-card">
      <div className="berry-info">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.item.name}.png`} alt={berry.name} className="berry-icon" />
        <span>{berry.name}</span>
      </div>
      <div className="berry-flavors">
        {flavors.map(flavor => (
          <span key={flavor.flavor.name} className="flavor-chip">{flavor.flavor.name}</span>
        ))}
      </div>
    </div>
  );
};

export default BerryCard;