import React from 'react';
import { Slider } from '@usine/react';

export default function SliderDoc() {
  return (
    <div className={'box'} style={{width: 300, marginLeft: 30}}>
      <Slider defaultValue={0.3} onChange={console.log} />
    </div>
  );
}
