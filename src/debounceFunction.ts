/**
 * A debounce function that delays the execution of a callback function
 * until after the specified delay time has elapsed since the last call.
 *
 * @param {Function} callback - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {Function} - A debounced version of the callback function.
 */

export function debounceFunction(callback: (...args: any) => void, delay: number) {
  let timeoutId: any;
  return function (...args:any) {
    // Clear any existing timeout
    clearTimeout(timeoutId);
    // Set a new timeout to invoke the callback
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
