'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SDLogo } from '@/app/ui/components/assets/SDLogo';
import { NavbarLG } from './NavbarLG';
import { NavbarSM } from './NavbarSM';
import { NavbarProps } from './Navbar.model';

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
    // Add more links as needed
  ];
  return (
    <nav className="z-[100] fixed flex justify-between items-center w-full h-16 lg:h-[4.5rem] px-5 py-3 bg-dark-950 shadow-lg shadow-[#00000080]">
      <Link href={'/'} className="h-5/6 text-darl-950 dark:text-dark-50">
        <SDLogo />
      </Link>
      {/* Small screen navbar */}
      <NavbarSM links={links} pathname={pathname} />
      {/* Large screen navbar */}
      <NavbarLG links={links} pathname={pathname} />
    </nav>
  );
}
