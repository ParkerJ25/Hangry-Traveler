import React, { useState } from 'react';
import './App.css';

function App() {
  const [startingLocation, setStartingLocation] = useState('');
  const [endingLocation, setEndingLocation] = useState('');

  const handleStartLocationChange = (e) => {
    setStartingLocation(e.target.value);
  };

  const handleEndLocationChange = (e) => {
    setEndingLocation(e.target.value);
  };

  return (
    <div className='app'>
      <h1>Hangry Traveler</h1>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter starting point"
          value={startingLocation}
          onChange={handleStartLocationChange}
          />
        <input
          type="text"
          placeholder='Enter final destination'
          value={endingLocation}
          onChange={handleEndLocationChange}
          />
      </div>
    </div>
  );
}
export default App;
