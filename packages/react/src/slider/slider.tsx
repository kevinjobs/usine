import React from 'react';
import { useInnerMove } from "@usine/hooks";
import colors from '../colors';

export interface SliderProps {
  /**
   * default value
   */
  defaultValue?: number;

  /**
   * take effect when the mouse-moving or touch-moving
   * @param value
   */
  onChange?(value: number): void;

  /**
   * take effect when release the mouse or raise your hand
   * @param value
   */
  onChangeEnd?(value: number): void;
}

export default function Slider(props: SliderProps) {
  const { defaultValue=0, onChange, onChangeEnd } = props;

  const [ position, setPosition ] = React.useState({ x: defaultValue, y: 0 });

  const handleChange = React.useCallback(({ x, y }: { x: number; y: number}) => {
    setPosition({x,y});
    if (onChange) onChange(x);
  }, []);

  const { ref, isActived } = useInnerMove(handleChange);

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

  React.useEffect(() => {
    if (!isActived && onChangeEnd) onChangeEnd(position.x);
  }, [isActived])

  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={'usine-slider'}
      style={styles.slider}
    >
      <div className={'usine-slider-track'} style={styles.track}>
        <div className={'usine-slider-track-filled'} style={styles.filled}>
        </div>
        <div className={'usine-slider-thumb'} style={styles.thumb}></div>
      </div>
    </div>
  )
}
