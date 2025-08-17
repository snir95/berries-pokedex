// src/components/BerriesCollection.jsx
import React from 'react';
import BerryCard from './BerryCard';

const BerriesCollection = ({ berries }) => {
  return (
    <div className="berries-collection">
      {berries.map(berry => (
        <BerryCard key={berry.id} berry={berry} />
      ))}
    </div>
  );
};

export default BerriesCollection;