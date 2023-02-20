import { useState, useRef } from 'react';


export default function useElementSize<T extends HTMLElement = any>() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<T>();

  return { ref, width, height };
}
