import { useState } from "react";
import { useEffect } from "react";
/**
 * A custom hook that updates a value after some interval.
 *
 * @param {T} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {T} - The debounced value.
 *
 * @template T
 */

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(0);
  useEffect(() => {
    const fn = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(fn);
    };
  }, [value, delay]);
  return debouncedValue;
};
