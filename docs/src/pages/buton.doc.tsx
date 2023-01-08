import React from 'react';
import { Button, Slider, VariantType, ColorType, SizeType } from '@usine/react';
import { useUsineTheme } from '@usine/peau';

export default function SliderDoc() {
  const theme = useUsineTheme();

  const [variant, setVariant] = React.useState<VariantType>('filled');
  const [color, setColor] = React.useState<ColorType>('blue');
  const [size, setSize] = React.useState<SizeType>('xl');

  const handleResize = (value: number) => {
    if (value > 0.8) setSize('xl');
    else if (value > 0.6) setSize('lg');
    else if (value > 0.4) setSize('md');
    else if (value > 0.2) setSize('sm');
    else setSize('xs');
  }
  
  console.log(theme);

  return (
    <div className={'box'}>
      <div style={{margin: '8px 0'}}>
        <span>不同形态</span>
        <select onChange={e => setVariant(e.target.value as VariantType)}>
          <option value={'filled'}>深色</option>
          <option value={'light'}>淡色</option>
          <option value={'subtle'}>无边框</option>
          <option value={'outline'}>线框</option>
          <option value={'default'}>默认</option>
        </select>
        <span>切换颜色</span>
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
      <div style={{ width: 300 }}>
        <span>调整大小</span>
        <Slider defaultValue={0.6} onChange={handleResize} />
      </div>
      <br />
      <div>
        <Button
          variant={variant}
          color={color}
          className={'test-button'}
          size={size}
        >
          Click
        </Button>
      </div>
    </div>
  );
}
