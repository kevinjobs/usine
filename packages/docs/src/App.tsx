import { LegacyRef, useState } from 'react';
import './App.css';
import { Slider } from 'smede-core';

function App() {
  return (
    <div className="App">
      <Slider onChange={console.log} />
    </div>
  );
}

export default App;
