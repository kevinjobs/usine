'use strict';

var React = require('react');

/**
 * 首选值在给定区间内，返回首选值；
 * 小于最小值，返回最小值；
 * 大于最小值，返回最大值。
 * @param min 区间最小值
 * @param value 首选值
 * @param max 区间最大值
 * @returns 最终结果
 */
function clamp(min, value, max) {
    return Math.min(Math.max(min, value), max);
}

function useInnerMove(onChange) {
    const ref = React.useRef();
    const isMounted = React.useRef(false);
    const isMoving = React.useRef(false);
    // if the mouse click or move over the given element, active is true.
    const [isActived, setIsActived] = React.useState(false);
    // init a ref for animation reference.
    const frame = React.useRef(0);
    React.useEffect(() => {
        var _a, _b;
        const toScrub = ({ x, y }) => {
            cancelAnimationFrame(frame.current);
            frame.current = requestAnimationFrame(() => {
                if (isMounted.current && ref.current) {
                    // set user-select to 'none' to avoid selecting the text.
                    ref.current.style.userSelect = 'none';
                    const rect = ref.current.getBoundingClientRect();
                    if (rect.width && rect.height) {
                        const _x = clamp(0, (x - rect.left) / rect.width, 1);
                        const _y = clamp(0, (y - rect.top) / rect.height, 1);
                        onChange({ x: _x, y: _y, });
                    }
                }
            });
        };
        const startScrubbing = () => {
            if (!isMoving.current && isMounted.current) {
                isMoving.current = true;
                setIsActived(true);
                startListeningEvents();
            }
        };
        const stopScrubbing = () => {
            if (isMoving.current && isMounted.current) {
                isMoving.current = false;
                setIsActived(false);
                cancelListeningEvents();
            }
        };
        const onMouseDown = (evt) => {
            startScrubbing();
            evt.preventDefault();
            onMouseMove(evt);
        };
        const onMouseMove = (evt) => {
            toScrub({ x: evt.clientX, y: evt.clientY });
        };
        const onMouseUp = (evt) => {
            stopScrubbing();
        };
        const onTouchStart = (evt) => {
            if (evt.cancelable) {
                evt.preventDefault();
            }
            startScrubbing();
            onTouchMove(evt);
        };
        const onTouchMove = (evt) => {
            if (evt.cancelable) {
                evt.preventDefault();
            }
            toScrub({ x: evt.changedTouches[0].clientX, y: evt.changedTouches[0].clientY });
        };
        const onTouchEnd = (evt) => {
            stopScrubbing();
        };
        const startListeningEvents = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            document.addEventListener('touchmove', onTouchMove);
            document.addEventListener('touchend', onTouchEnd);
        };
        const cancelListeningEvents = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', onMouseDown);
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener('touchstart', onTouchStart, { passive: false });
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mousedown', onMouseDown);
                ref.current.removeEventListener('touchstart', onTouchStart);
            }
        };
    }, [onChange]);
    React.useEffect(() => {
        isMounted.current = true;
    }, []);
    return { ref, isActived };
}

function Slider(props) {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const { ref, isActived } = useInnerMove(setPosition);
    const styles = {
        slider: {
            position: 'relative',
            height: 16,
        },
        track: {
            height: 'inherit',
            backgroundColor: '#dedede',
        },
        filled: {
            height: 'inherit',
            width: `${position.x * 100}%`,
            backgroundColor: '#101010',
        },
        thumb: {
            position: 'absolute',
            height: 16,
            width: 16,
            backgroundColor: isActived ? '#ec4242' : '#41a6de',
            left: `calc(${position.x * 100}% - 8px)`,
            top: 0,
        },
    };
    return (React.createElement("div", { ref: ref, className: 'smede-slider', style: styles.slider },
        React.createElement("div", { className: 'smede-slider-track', style: styles.track },
            React.createElement("div", { className: 'smede-slider-track-filled', style: styles.filled }),
            React.createElement("div", { className: 'smede-slider-thumb', style: styles.thumb }))));
}

exports.Slider = Slider;
