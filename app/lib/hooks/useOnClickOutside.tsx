// React Imports
import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

/**
 * Custom React hook to handle click/touch events outside of a specified DOM element.
 *
 * @param ref - RefObject representing the DOM element for which outside clicks/touches should be detected.
 * @param handler - Callback function to be executed when a click/touch event occurs outside the specified element.
 * @param noRef - Optional RefObject representing a DOM element that should be excluded from the outside click/touch detection.
 */
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
  noRef?: RefObject<T>,
) {
  useEffect(() => {
    /**
     * Event listener function to handle clicks/touches outside the specified element.
     * @param event - The mouse or touch event.
     */
    const handleClickOutside = (event: AnyEvent) => {
      const targetElement = ref?.current;
      const excludedElement = noRef?.current;
      if (
        !targetElement ||
        targetElement.contains(event.target as Node) ||
        (excludedElement && excludedElement.contains(event.target as Node))
      ) {
        return;
      }
      handler(event);
    };
    // Add event listeners for mouse down and touch start events on the document
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    // Remove event listeners when the component unmounts or the dependencies change
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler, noRef]);
  // No need to return anything in this case
  return;
}
export default useOnClickOutside;
