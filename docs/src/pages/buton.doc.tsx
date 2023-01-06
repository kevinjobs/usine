import React from 'react';
import { Button, VariantType, ColorType } from '@usine/react';

export default function SliderDoc() {
  const [variant, setVariant] = React.useState<VariantType>('filled');
  const [color, setColor] = React.useState<ColorType>('blue');

  return (
    <div className={'box'}>
      <Button variant={variant} color={color} className={'test-button'}>
        Button
      </Button>
      <div>
        <select onChange={e => setVariant(e.target.value as VariantType)}>
          <option value={'filled'}>Filled</option>
          <option value={'light'}>Light</option>
          <option value={'subtle'}>Subtle</option>
          <option value={'outline'}>Outline</option>
          <option value={'default'}>Default</option>
        </select>
        <select onChange={e => setColor(e.target.value as ColorType)}>
          <option value={'red'}>red</option>
          <option value={'pink'}>pink</option>
          <option value={'grape'}>grape</option>
          <option value={'violet'}>violet</option>
          <option value={'indigo'}>indigo</option>
          <option value={'blue'}>blue</option>
          <option value={'cyan'}>cyan</option>
          <option value={'teal'}>teal</option>
          <option value={'green'}>green</option>
          <option value={'lime'}>lime</option>
          <option value={'yellow'}>yellow</option>
          <option value={'orange'}>orange</option>
        </select>
      </div>
    </div>
  );
}
