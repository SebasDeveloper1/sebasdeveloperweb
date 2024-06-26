'use client';
// External modules
import Link from 'next/link'; // Link component from Next.js
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

// Custom components and hooks
import { EducationCard } from './EducationCard'; // Component for education card
import { PlatziLogo } from '@/app/ui/components/assets/PlatziLogo'; // Component for Platzi logo
import { UdecLogo } from '@/app/ui/components/assets/UdecLogo'; // Component for Udec logo
import Loading from './Loading'; // Loading component

// Custom hooks and utilities
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages
import { routesPaths } from '@/app/routes/routes'; // Paths for application routes

/**
 * Component representing the education section.
 * @returns {JSX.Element} - JSX element representing the education section.
 */
export function Education(): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isLoading = useLoadPage();

  // Render loading skeleton while page is loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the education section
  return (
    <section ref={ref} className="w-full bg-white dark:bg-dark-950">
      <div className="overflow-hidden relative flex flex-col justify-center items-center w-full py-16 md:py-32">
        <section className="z-10 flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12">
          <article
            className={`flex flex-col justify-center gap-4 w-full ${!inView ? 'opacity-0' : 'animate-fade-in-right opacity-100'}`}
          >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-school w-4/5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              </div>
              <h2 className="heading-3 w-full font-bold text-dark-800 dark:text-light-50">
                Educación
              </h2>
            </div>
            <p className="paragraph-lg max-w-prose text-dark-700 dark:text-light-400">
              Soy Ingeniero de Sistemas, egresado de la Universidad de
              Cundinamarca y estudiante permanente de Platzi en temas
              relacionados con Desarrollo e Ingeniería, Habilidades blandas,
              Inglés y mucho más.
            </p>
            <Link
              href={routesPaths?.education}
              className="button-tertiary w-fit mt-3 bg-sky-100 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600"
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
          </article>
          <ul
            className={`flex justify-evenly items-center gap-8 place-items-center w-11/12 md:w-full ${!inView ? 'opacity-0' : 'animate-zoom-in opacity-100'}`}
          >
            <li className="w-2/5 md:w-1/4">
              <EducationCard
                href="https://platzi.com/p/SebasDeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlatziLogo className="w-full text-dark-800 dark:text-light-300 group-hover:text-dark-950 dark:group-hover:text-white transition-all duration-300" />
              </EducationCard>
            </li>
            <li className="w-2/5 md:w-1/4">
              <EducationCard
                href="https://www.ucundinamarca.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UdecLogo className="w-full text-dark-800 dark:text-light-300 group-hover:text-dark-950 dark:group-hover:text-white transition-all duration-300" />
              </EducationCard>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
