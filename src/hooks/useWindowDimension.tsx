import { useState, useEffect } from 'react';

type WindowDimension = {
  width: number;
  height: number;
};

export function useWindowDimension(): WindowDimension {
  const [dimension, setDimension] = useState<WindowDimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setDimension((prev) => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }, 100); // 100ms
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []);
  return dimension;
}

function debounce<T extends (...args: any[]) => void>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<T>) => {
    clearTimeout(timer!);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(null, args);
    }, ms);
  };
}
