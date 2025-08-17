import React, { useState } from 'react';
import BerryModal from './BerryModal';

const BerryCard = ({ berry }) => {
  const [showModal, setShowModal] = useState(false);
  const flavors = berry.flavors.filter(flavor => flavor.potency > 0);

  return (
    <>
      <div className="berry-card" onClick={() => setShowModal(true)}>
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
      {showModal && <BerryModal berry={berry} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default BerryCard;