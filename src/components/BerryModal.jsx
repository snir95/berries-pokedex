import React from 'react';

const BerryModal = ({ berry, onClose }) => {
  if (!berry) return null;

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.item.name}.png`} 
            alt={berry.name} 
            className="berry-icon-large" 
          />
          <h2>{berry.name} Berry</h2>
        </div>

        <div className="modal-body">
          <div className="info-grid">
            <div className="info-item">
              <h3>Growth</h3>
              <p>{berry.growth_time} hours</p>
              <p>Max harvest: {berry.max_harvest} berries</p>
            </div>

            <div className="info-item">
              <h3>Properties</h3>
              <p>Size: {berry.size} mm</p>
              <p>Smoothness: {berry.smoothness}</p>
              <p>Firmness: {berry.firmness.name}</p>
            </div>

            <div className="info-item">
              <h3>Soil</h3>
              <p>Soil Dryness: {berry.soil_dryness}</p>
            </div>

            <div className="info-item">
              <h3>Natural Gift</h3>
              <p>Power: {berry.natural_gift_power}</p>
              <p>Type: {berry.natural_gift_type.name}</p>
            </div>
          </div>

          <div className="flavors-section">
            <h3>Flavors</h3>
            <div className="flavors-grid">
              {berry.flavors.map((flavor) => (
                <div 
                  key={flavor.flavor.name} 
                  className="flavor-item"
                  data-flavor={flavor.flavor.name}
                >
                  <span 
                    className="flavor-name"
                    data-flavor={flavor.flavor.name}
                  >
                    {flavor.flavor.name}
                  </span>
                  <span className="flavor-potency">{flavor.potency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerryModal;
