import { useEffect, useState, useRef } from 'react';
import { clamp } from 'smede-utils';

export interface UseInnerMovePosition {
  x: number;
  y: number;
}

export function clampPosition(position: UseInnerMovePosition) {
  return {
    x: clamp(0, position.x, 1),
    y: clamp(0, position.y, 1),
  }
}

export default function useInnerMove<T extends HTMLElement = HTMLDivElement>(
  onChange: (position: UseInnerMovePosition) => void,
) {
  const ref = useRef<T>();
  const isMounted = useRef(false);
  const isMoving = useRef(false);
  // if the mouse click or move over the given element, active is true.
  const [isActived, setIsActived] = useState(false);
  // init a ref for animation reference.
  const frame = useRef(0);

  useEffect(() => {
    const toScrub = ({ x, y }: UseInnerMovePosition) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (isMounted.current && ref.current) {
          // set user-select to 'none' to avoid selecting the text.
          ref.current.style.userSelect = 'none';
          const rect = ref.current.getBoundingClientRect();

          if (rect.width && rect.height) {
            const _x = clamp(0, (x - rect.left) / rect.width, 1);
            const _y =  clamp(0, (y - rect.top) / rect.height, 1);
            onChange({ x: _x, y: _y, });
          }
        }
      })
    }

    const startScrubbing = () => {
      if (!isMoving.current && isMounted.current) {
        isMoving.current = true;
        setIsActived(true);
        startListeningEvents();
      }
    }

    const stopScrubbing = () => {
      if (isMoving.current && isMounted.current) {
        isMoving.current = false;
        setIsActived(false);
        cancelListeningEvents();
      }
    }

    const onMouseDown = (evt: MouseEvent) => {
      startScrubbing();
      evt.preventDefault();
      onMouseMove(evt);
    }

    const onMouseMove = (evt: MouseEvent) => {
      toScrub({ x: evt.clientX, y: evt.clientY });
    }

    const onMouseUp = (evt: MouseEvent) => {
      stopScrubbing();
    }

    const onTouchStart = (evt: TouchEvent) => {
      if (evt.cancelable) {
        evt.preventDefault();
      }

      startScrubbing();
      onTouchMove(evt);
    }

    const onTouchMove = (evt: TouchEvent) => {
      if (evt.cancelable) {
        evt.preventDefault();
      }

      toScrub({ x: evt.changedTouches[0].clientX, y: evt.changedTouches[0].clientY });
    }

    const onTouchEnd = (evt: TouchEvent) => {
      stopScrubbing();
    }

    const startListeningEvents = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    }
    
    const cancelListeningEvents = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    }

    ref.current?.addEventListener('mousedown', onMouseDown);
    ref.current?.addEventListener('touchstart', onTouchStart, { passive: false });

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousedown', onMouseDown);
        ref.current.removeEventListener('touchstart', onTouchStart);
      }
    }
  }, [onChange]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { ref, isActived }
}