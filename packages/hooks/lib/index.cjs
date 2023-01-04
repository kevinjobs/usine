'use strict';

var react = require('react');
var smedeUtils = require('smede-utils');

function useInnerMove(onChange) {
    const ref = react.useRef();
    const isMounted = react.useRef(false);
    const isMoving = react.useRef(false);
    // if the mouse click or move over the given element, active is true.
    const [isActived, setIsActived] = react.useState(false);
    // init a ref for animation reference.
    const frame = react.useRef(0);
    react.useEffect(() => {
        var _a, _b;
        const toScrub = ({ x, y }) => {
            cancelAnimationFrame(frame.current);
            frame.current = requestAnimationFrame(() => {
                if (isMounted.current && ref.current) {
                    // set user-select to 'none' to avoid selecting the text.
                    ref.current.style.userSelect = 'none';
                    const rect = ref.current.getBoundingClientRect();
                    if (rect.width && rect.height) {
                        const _x = smedeUtils.clamp(0, (x - rect.left) / rect.width, 1);
                        const _y = smedeUtils.clamp(0, (y - rect.top) / rect.height, 1);
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
    react.useEffect(() => {
        isMounted.current = true;
    }, []);
    return { ref, isActived };
}

function useWindowEvent(evType, listener, options) {
    react.useEffect(() => {
        window.addEventListener(evType, listener, options);
        return () => window.removeEventListener(evType, listener, options);
    }, [evType, listener]);
}

exports.useInnerMove = useInnerMove;
exports.useWindowEvent = useWindowEvent;
