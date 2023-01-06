import React from 'react';
import { Button } from '@usine/react';

export default function SliderDoc() {
  return (
    <div className={'box'}>
      <Button>Default</Button>
      <br />
      <Button type='primary'>Primary</Button>
      <br />
      <Button type='danger'>Danger</Button>
      <br />
      <Button type='success'>Success</Button>
    </div>
  );
}
