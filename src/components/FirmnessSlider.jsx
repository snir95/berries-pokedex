// src/components/FirmnessSlider.jsx
import React from 'react';
import * as Slider from '@radix-ui/react-slider';

const firmnessLevels = [
  'super-hard',
  'very-hard',
  'hard',
  'soft',
  'very-soft',
];

const firmnessColors = {
  'super-hard': '#FF4444',
  'very-hard': '#FF8844',
  'hard': '#FFCC44',
  'soft': '#44FF44',
  'very-soft': '#44FFFF',
};

const FirmnessSlider = ({ selectedFirmness, onFirmnessChange }) => {
  // Convert firmness level to slider value (0-100)
  const getCurrentValue = () => {
    const index = firmnessLevels.indexOf(selectedFirmness);
    return ((firmnessLevels.length - 1 - index) / (firmnessLevels.length - 1)) * 100;
  };

  // Convert slider value to firmness level
  const handleValueChange = (values) => {
    const value = values[0];
    const index = Math.round(((100 - value) / 100) * (firmnessLevels.length - 1));
    onFirmnessChange(firmnessLevels[index]);
  };

  return (
    <div className="firmness-slider">
      <h2>How tough are you?</h2>
      <div className="slider-container">
        <div className="firmness-labels">
          {firmnessLevels.map((level) => (
            <span
              key={level}
              className={`firmness-label ${selectedFirmness === level ? 'active' : ''}`}
              style={{
                color: selectedFirmness === level ? firmnessColors[level] : '#666'
              }}
            >
              {level.replace('-', ' ')}
            </span>
          ))}
        </div>
        <div className="slider-wrapper">
          <Slider.Root
            className="slider-root"
            orientation="vertical"
            value={[getCurrentValue()]}
            onValueChange={handleValueChange}
            max={100}
            step={1}
          >
            <div className="slider-hint">Drag me!</div>
            <Slider.Track className="slider-track">
              <Slider.Range className="slider-range" style={{
                background: `linear-gradient(to top, ${Object.values(firmnessColors).join(', ')})`
              }} />
            </Slider.Track>
            <Slider.Thumb 
              className="slider-thumb"
              style={{
                backgroundColor: firmnessColors[selectedFirmness]
              }}
              aria-label="Firmness level"
            />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
};

export default FirmnessSlider;