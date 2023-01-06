import React from 'react';
import { useInnerMove } from "@usine/hooks";
import colors from '../colors';

export interface SliderProps {
  onChange?(value: number): void;
  onChangeEnd?(value: number): void;
}

export default function Slider(props: SliderProps) {
  const [ position, setPosition ] = React.useState({ x: 0, y: 0 });
  const { ref, isActived } = useInnerMove(setPosition);

  const styles: { [key: string]: React.CSSProperties } = {
    slider: {
      position: 'relative',
      height: 16,
    },
    track: {
      height: 'inherit',
      backgroundColor: colors.gray[1],
    },
    filled: {
      height: 'inherit',
      width: `${position.x * 100}%`,
      backgroundColor: colors.gray[7],
    },
    thumb: {
      position: 'absolute',
      height: 16,
      width: 16,
      backgroundColor: isActived ? colors.red[5] : colors.blue[5],
      left: `calc(${position.x * 100}% - 8px)`,
      top: 0,
    },
  }

  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={'smede-slider'}
      style={styles.slider}
    >
      <div className={'smede-slider-track'} style={styles.track}>
        <div className={'smede-slider-track-filled'} style={styles.filled}>
        </div>
        <div className={'smede-slider-thumb'} style={styles.thumb}></div>
      </div>
    </div>
  )
}