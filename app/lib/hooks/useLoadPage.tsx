import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if the page is loading.
 * Returns a boolean indicating whether the page is loading or not.
 * @returns {boolean} Indicates if the page is loading.
 */
export default function useLoadPage(): boolean {
  // State to store whether the page is loading
  const [isLoading, setIsLoading] = useState(true);

  // Side effect to subscribe to the window load event
  useEffect(() => {
    // Function to handle the window load event
    const handleLoad = () => {
      setIsLoading(false); // When the page is fully loaded, change the state to false
    };

    // Check if the document is already fully loaded on initialization
    if (document.readyState === 'complete') {
      setIsLoading(false); // If the document is already fully loaded, change the state to false
    } else {
      // If the document is not fully loaded, add an event listener for the window load event
      window.addEventListener('load', handleLoad);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // The effect runs only once on initialization

  // Return the state indicating whether the page is loading or not
  return isLoading;
}
