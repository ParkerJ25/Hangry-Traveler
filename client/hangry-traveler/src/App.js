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
    <div className="app">
      <h1>Hangry Traveler</h1>
      <p className="description">
        Input two points, and we will show you the best food spots along the way.
      </p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter starting destination"
          value={startingLocation}
          onChange={handleStartLocationChange}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter ending destination"
          value={endingLocation}
          onChange={handleEndLocationChange}
        />
      </div>
    </div>
  );
}

export default App;
