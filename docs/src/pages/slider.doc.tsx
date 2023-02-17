import React from 'react';
import { Slider } from '@usine/react';

export default function SliderDoc() {
  const [value, setValue] = React.useState<number>(0);
  const [endV, setEndV] = React.useState<number>(0);

  return (
    <div className={'box'} style={{width: 300, marginLeft: 30}}>
      <div>
        <p><span>onChange: {value}</span></p>
        <p><span>onChangeEnd: {endV}</span></p>
      </div>
      <Slider defaultValue={0.3} onChange={setValue} onChangeEnd={setEndV}/>
    </div>
  );
}
