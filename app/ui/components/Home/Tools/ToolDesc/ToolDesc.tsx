'use client';
// External hook
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

// Custom hook and component
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages
import Loading from './Loading'; // Loading component

/**
 * Represents a section displaying skills and tools.
 * Renders a description of skills and tools, emphasizing continuous learning and growth.
 * @returns {JSX.Element} - JSX element representing the skills and tools section.
 */
export function ToolDesc(): JSX.Element {
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

  // Render the skills and tools section
  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center items-center gap-8 w-full pt-16 md:pt-32 pb-12 ${!inView ? 'opacity-0' : 'animate-fade-in-right opacity-100'}`}
    >
      <article className="flex flex-col justify-center gap-4 w-11/12 lg:w-10/12">
        <div className="flex flex-col justify-center gap-8 w-full">
          <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-sky-400 bg-sky-600 text-sky-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-tool w-4/5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
            </svg>
          </div>
          <h2 className="heading-3 w-full font-bold text-dark-900 dark:text-light-50">
            Habilidades y Herramientas
          </h2>
        </div>
        <p className="paragraph-lg max-w-prose text-dark-700 dark:text-light-400">
          Soy un apasionado por el aprendizaje continuo. Trabajo a diario para
          perfeccionar mis habilidades, explorar nuevas tecnologías y asimilar
          conceptos innovadores que me permitan crecer como profesional y como
          ser humano.
        </p>
      </article>
    </section>
  );
}
