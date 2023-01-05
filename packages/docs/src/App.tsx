import React from 'react';
import './App.css';
import { Slider } from '@smede/react';

export default function App() {
  return (
    <div className="App">
      <div className={'box'} style={{width: 300, marginLeft: 30}}>
        <Slider onChange={console.log} />
      </div>
    </div>
  );
}
