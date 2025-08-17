import React, { useState, useEffect } from 'react';
import { fetchAllBerries } from './api';
import { useDebounce } from './hooks/useDebounce';
import FirmnessSlider from './components/FirmnessSlider';
import BerriesCollection from './components/BerriesCollection';
import './App.css';

function App() {
  // State for the full list of berries fetched from the API
  const [berries, setBerries] = useState([]);
  
  // State for the currently selected firmness level from the slider
  const [selectedFirmness, setSelectedFirmness] = useState('soft'); // Default value
  
  // State for the user's input in the search field
  const [searchTerm, setSearchTerm] = useState('');
  
  // Debounced search term to prevent excessive re-renders while typing
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  // useEffect to fetch all berry data when the component first mounts
  useEffect(() => {
    const getBerries = async () => {
      const allBerries = await fetchAllBerries();
      setBerries(allBerries);
    };
    
    getBerries();
  }, []); // The empty dependency array ensures this runs only once

  // Filter the berries based on the selected firmness and the debounced search term
  const filteredBerries = berries
    .filter(berry => berry.firmness.name === selectedFirmness)
    .filter(berry => 
      berry.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

  return (
    <div className="App">
      <div className="pokedex-card">
        {/* Left Side: The Firmness Slider */}
        <FirmnessSlider 
          selectedFirmness={selectedFirmness}
          onFirmnessChange={setSelectedFirmness} // Pass the state setter function
        />
        
        {/* Right Side: The Search and Berries Collection */}
        <div className="right-panel">
          <input 
            type="text"
            placeholder="Search by name..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on every keystroke
          />
          <BerriesCollection berries={filteredBerries} />
        </div>
      </div>
    </div>
  );
}

export default App;