import { useEffect } from 'react';

export default function useWindowEvent<K extends string>(
  evType: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(evType, listener, options);
    return () => window.removeEventListener(evType, listener, options);
  }, [evType, listener]);
}
