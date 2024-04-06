'use client';
// Import necessary dependencies and types
import {
  useState,
  useEffect,
  MouseEvent,
  TouchEvent,
  KeyboardEvent,
} from 'react';
import { ScrollTopButtonWrapperProps } from './ScrollTopButtonWrapper.model';
/**
 * ScrollTopButtonWrapper Component
 *
 * The ScrollTopButtonWrapper component wraps its children and adds a button to scroll to the top when clicked.
 * The button is displayed when the user has scrolled down a certain distance.
 *
 * @component
 * @param {ScrollTopButtonWrapperProps} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped by the component.
 * @returns {JSX.Element} - JSX element representing the ScrollTopButtonWrapper component.
 */
export function ScrollTopButtonWrapper({
  children,
}: ScrollTopButtonWrapperProps) {
  // State to manage visibility based on scroll position
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  // Effect to handle scroll events and update visibility state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on component unmount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  /**
   * Handle button click event to scroll to the top of the page.
   * @param {MouseEvent | TouchEvent | KeyboardEvent} e - The click, touch, or keyboard event.
   */
  const handleButtonClick = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Return the JSX representation of the ScrollTopButtonWrapper component
  return (
    <div className="w-full">
      {children}
      <button
        type="button"
        className={`z-[100] fixed bottom-5 right-5 button-primary padding-icon ${isScrolled ? '' : 'hidden'}`}
        title="Ir arriba"
        aria-label="Ir arriba"
        onClick={(e) => handleButtonClick(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-up"
          width={34}
          height={34}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 15l6 -6l6 6" />
        </svg>
      </button>
    </div>
  );
}
