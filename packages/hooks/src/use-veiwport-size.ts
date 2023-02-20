import { useCallback, useState, useEffect } from "react";
import useWindowEvent from "./use-window-event";

const opts = {
  passive: true,
};

export function useViewportSize() {
  const [wSize, setWSize] = useState({width: 0, height: 0});

  const setSize = useCallback(() => {
    setWSize({ width: window.innerWidth || 0, height: window.innerHeight || 0});
  }, []);

  useWindowEvent('resize', setSize, opts);
  useWindowEvent('orientationchange', setSize, opts);
  useEffect(setSize, []);

  return wSize;
}
