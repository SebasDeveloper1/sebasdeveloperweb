'use client';
//External hook
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

/**
 * Represents a static card in the ToolList component.
 * Renders a static card with a motivational message.
 * @returns {JSX.Element} - JSX element representing the static card.
 */
export function ToolStaticCard(): JSX.Element {
  // Create a reference to the component's visibility
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Render the static card with a motivational message7
  return (
    <li
      ref={ref}
      className={`overflow-hidden w-full min-h-[6.5rem] h-full rounded-xl border-2 border-dashed border-primary-500 ${!inView ? 'opacity-0' : 'animate-bounce-fade-in opacity-100'}`}
    >
      <div className="flex place-items-center w-full min-h-[6.5rem] h-full p-4 text-center">
        <span className="w-full span-xl text-dark-800 dark:text-light-300">
          🚀 Mejorando a diario 😊
        </span>
      </div>
    </li>
  );
}
