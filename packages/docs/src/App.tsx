import { LegacyRef, useState } from 'react';
import './App.css';
import { Slider } from 'smede-ui/react';

function App() {
  return (
    <div className="App">
      <div className={'box'} style={{width: 300, marginLeft: 30}}>
        <Slider onChange={console.log} />
      </div>
    </div>
  );
}

export default App;
