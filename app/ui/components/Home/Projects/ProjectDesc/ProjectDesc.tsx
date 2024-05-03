'use client';
// Custom hook
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages

// External modules
import Link from 'next/link'; // Link component from Next.js

// External hook
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

// Custom component
import Loading from './Loading'; // Loading component

// Utility
import { routesPaths } from '@/app/routes/routes'; // Paths for application routes

/**
 * Represents a section displaying project descriptions.
 * Renders a description of recent projects and a link to view more.
 * @returns {JSX.Element} - JSX element representing the project description section.
 */
export function ProjectDesc(): JSX.Element {
  // Check if the component is in view using useInView hook
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Check if the page is loading using useLoadPage hook
  const isLoading = useLoadPage();

  // If the page is loading, render the Loading component
  if (isLoading) {
    return <Loading />;
  }

  // Render the project description section
  return (
    <div
      ref={ref}
      className={`flex flex-col justify-start gap-4 w-full h-full ${!inView ? 'opacity-0' : 'animate-fade-in-right opacity-100'}`}
    >
      <div className="flex flex-col justify-center gap-8 w-full">
        <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-indigo-400 bg-indigo-600 text-indigo-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-devices w-4/5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
            <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
            <path d="M16 9h2" />
          </svg>
        </div>
        <h2 className="heading-3 w-full font-bold text-dark-900 dark:text-light-50">
          Últimos proyectos
        </h2>
      </div>
      <p className="paragraph-lg max-w-prose text-dark-700 dark:text-light-300">
        Me apasiona participar en proyectos que desafíen mis habilidades,
        permitiéndome perfeccionar mis técnicas y brindándome la oportunidad de
        mostrar al mundo mi potencial como profesional.
      </p>
      <Link
        href={routesPaths?.projects}
        className="button-tertiary w-fit mt-3 bg-indigo-100 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 focus:ring-indigo-600"
      >
        Ver más
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-right"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </Link>
    </div>
  );
}
