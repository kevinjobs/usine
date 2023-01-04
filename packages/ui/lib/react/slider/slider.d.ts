/// <reference types="react" />
export interface SliderProps {
    onChange?(value: number): void;
    onChangeEnd?(value: number): void;
}
export default function Slider(props: SliderProps): JSX.Element;
