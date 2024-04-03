'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SDLogo } from '@/app/ui/components/assets/SDLogo';
import { NavbarLG } from './NavbarLG';
import { NavbarSM } from './NavbarSM';
import { NavbarProps } from './Navbar.model';
import { ThemeSwich } from '../ThemeSwich';

export function Navbar() {
  const pathname = usePathname();
  // Define an array of navigation links with names, hrefs, and icons
  const links: NavbarProps[] = [
    {
      name: 'Inicio',
      href: '/',
    },
    {
      name: 'proyectos',
      href: '/projects',
    },
    {
      name: 'Educación',
      href: '/education',
    },
    // Add more links as needed
  ];
  return (
    <nav className="z-[100] fixed flex justify-between items-center w-full h-16 px-5 py-3 lg:border-b border-dark-900/10 dark:border-light-50/[0.06] bg-light-50 dark:bg-dark-950">
      <Link
        href={'/'}
        className="overflow-hidden inline-block h-full text-dark-700 dark:text-light-50"
      >
        <SDLogo className="h-full" />
      </Link>
      <div className="grid grid-flow-col place-items-center gap-4">
        {/* Small screen navbar */}
        <NavbarSM links={links} pathname={pathname} />
        {/* Large screen navbar */}
        <NavbarLG links={links} pathname={pathname} />
        <ThemeSwich />
      </div>
    </nav>
  );
}
