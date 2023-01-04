/// <reference types="react" />
export interface UseInnerMovePosition {
    x: number;
    y: number;
}
export declare function clampPosition(position: UseInnerMovePosition): {
    x: number;
    y: number;
};
export default function useInnerMove<T extends HTMLElement = HTMLDivElement>(onChange: (position: UseInnerMovePosition) => void): {
    ref: import("react").MutableRefObject<T | undefined>;
    isActived: boolean;
};
