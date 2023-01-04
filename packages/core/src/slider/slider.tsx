import React from 'react';
import { useInnerMove } from "smede-hooks";

export interface SliderProps {
  onChange?(value: number): void;
  onChangeEnd?(value: number): void;
}

export default function Slider(props: SliderProps) {
  const [ position, setPosition ] = React.useState({ x: 0, y: 0 });
  const { ref, isActived } = useInnerMove(setPosition);

  const styles = {
    slider: {
      height: 16,
    },
    track: {
      height: 'inherit',
      backgroundColor: '#dedede',
    },
    filled: {
      height: 'inherit',
      width: `calc(${position.x * 100}%)`,
      backgroundColor: '#101010',
    },
    thumb: {
      height: 16,
      width: 16,
      backgroundColor: isActived ? '#ec4242' : '#212223',
    }
  }

  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={'smede-slider'}
      style={styles.slider}
    >
      <div className={'smede-slider-track'} style={styles.track}>
        <div className={'smede-slider-track-filled'} style={styles.filled}>
          <div className={'smede-slider-thumb'} style={styles.thumb}></div>
        </div>
      </div>
    </div>
  )
}