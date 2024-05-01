'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SDLogo } from '@/app/ui/components/assets/SDLogo';
import { NavbarLG } from './NavbarLG';
import { NavbarSM } from './NavbarSM';
import { NavbarLinks, NavbarProps } from './Navbar.model';
import { ThemeSwich } from '../ThemeSwich';
import { routesPaths } from '@/app/routes/routes';

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
