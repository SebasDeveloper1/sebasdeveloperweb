'use client';
// External modules
import Link from 'next/link'; // Link component from Next.js
import { usePathname } from 'next/navigation'; // Hook for accessing the current URL pathname

// Custom components and models
import { NavbarLG } from './NavbarLG'; // Large screen navbar component
import { NavbarSM } from './NavbarSM'; // Small screen navbar component
import { NavbarLinks, NavbarProps } from './Navbar.model'; // Navbar links and props
import { ThemeSwich } from '../ThemeSwich'; // Component for switching themes
import { SDLogo } from '@/app/ui/components/assets/SDLogo'; // Component for the SDLogo

// Utility
import { routesPaths } from '@/app/routes/routes'; // Paths for application routes

/**
 * Navbar component for displaying navigation links and theme switch.
 *
 * @param {NavbarProps} personalInfo - Personal information for the user.
 * @returns {JSX.Element} The JSX representation of the Navbar component.
 */
export function Navbar({ personalInfo }: NavbarProps) {
  const pathname = usePathname();
  // Define an array of navigation links with names, paths, and icons
  const links: NavbarLinks[] = [
    {
      name: 'Inicio',
      path: routesPaths?.home,
    },
    {
      name: 'proyectos',
      path: routesPaths?.projects,
    },
    {
      name: 'Educación',
      path: routesPaths?.education,
    },
    // Add more links as needed
  ];
  return (
    <nav className="z-[100] fixed flex justify-between items-center w-full h-16 px-5 py-3 lg:border-b border-dark-900/10 dark:border-light-50/[0.06] bg-light-50 dark:bg-dark-950">
      <Link
        href={routesPaths?.home}
        className="overflow-hidden inline-block h-full text-dark-700 dark:text-light-50"
      >
        <SDLogo className="h-full" />
      </Link>
      <div className="grid grid-flow-col place-items-center gap-4">
        {/* Small screen navbar */}
        <NavbarSM
          links={links}
          pathname={pathname}
          personalInfo={personalInfo}
        />
        {/* Large screen navbar */}
        <NavbarLG links={links} pathname={pathname} />
        <ThemeSwich />
      </div>
    </nav>
  );
}
