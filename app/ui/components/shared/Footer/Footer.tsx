// External modules
import Link from 'next/link'; // Link component from Next.js

// Custom component
import { SDLogo } from '@/app/ui/components/assets/SDLogo'; // Component for the SDLogo

// Utility
import { routesPaths } from '@/app/routes/routes'; // Paths for application routes

/**
 * Footer component for displaying footer information.
 */
export function Footer() {
  return (
    <section className="flex justify-center items-center w-full py-20 bg-light-950 dark:bg-dark-900/30">
      <article className="flex flex-col justify-center items-center gap-5 w-11/12 lg:w-10/12 text-center">
        <Link
          href={routesPaths?.home}
          className="inline-block h-8 md:h-10 text-light-50 dark:text-dark-50"
        >
          <SDLogo />
        </Link>
        <span className="inline-block w-full span-base leading-none font-medium text-primary-500 dark:text-primary-500">
          Sebastian Pedroza ◉ @SebasDeveloper ◉ 2024
        </span>
        <span className="inline-block w-full span-sm leading-none font-medium text-light-400 dark:text-dark-300">
          Hecho con el 💙 por Sebastian Pedroza
        </span>
      </article>
    </section>
  );
}
