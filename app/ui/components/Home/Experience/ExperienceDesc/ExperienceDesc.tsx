'use client';
// Custom hooks and utilities
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages

// External module
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

// Custom components
import Loading from './Loading'; // Loading component

/**
 * Component representing the description for the experience section.
 * @returns {JSX.Element} - JSX element representing the description for the experience section.
 */
export function ExperienceDesc(): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isLoading = useLoadPage();

  // Render loading skeleton while page is loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the description for the experience section
  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center gap-8 w-full ${!inView ? 'opacity-0' : 'animate-fade-in-right opacity-100'}`}
    >
      <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-yellow-400 bg-yellow-600 text-yellow-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-4/5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <path d="M12 12l0 .01" />
          <path d="M3 13a20 20 0 0 0 18 0" />
        </svg>
      </div>
      <h2 className="heading-3 w-full font-bold text-dark-900 dark:text-light-50">
        Experiencia laboral
      </h2>
    </div>
  );
}
