'use client';
// Import necessary dependencies and types
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useRef, MouseEvent } from 'react';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';
import { NavbarSMprops } from './NavbarSM.model';
import SDPhoto from '@/public/images/sebastian2.jpg';

export function NavbarSM({ links, pathname }: NavbarSMprops): JSX.Element {
  // State for controlling the visibility of the search input and menu
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const router = useRouter();

  // Handler for toggling the menu
  const handleMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  // Ref for handling clicks outside the menu
  const menuRef = useRef(null);

  // Hook to close menu and search on clicks outside
  useOnClickOutside(menuRef, () => {
    setOpenMenu(false);
  });

  // Handler for navigating to a link
  const handleLink = (e: MouseEvent<HTMLButtonElement>, link: string) => {
    e.preventDefault();
    router.push(link);
    setOpenMenu(!openMenu);
  };

  /**
   * Render the JSX for the NavbarSM component
   */
  return (
    <section
      ref={menuRef}
      className="lg:hidden flex items-center gap-2 bg-dark-50 dark:bg-dark-950"
    >
      <button
        type="button"
        className={`button-primary padding-icon transition-all duration-300 transform ${
          openMenu ? 'rotate-90' : ''
        }`}
        title={!openMenu ? 'Menu' : 'Cerrar'}
        aria-label="Menu"
        onClick={handleMenu}
      >
        {!openMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-deep"
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
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        )}
      </button>
      {/* Menu section */}
      <article
        className={`overflow-y-auto scroll-card fixed inset-0 bg-dark-50 dark:bg-dark-950 mt-16 transform transition-all  ${openMenu ? 'navbar-menu-open' : 'navbar-menu-close'}`}
      >
        <div className="flex flex-col justify-center gap-6 w-full px-4 pt-2 pb-6">
          <section className="overflow-hidden w-full bg-dark-500/20 rounded-lg">
            <article className="flex flex-col items-center gap-4 w-full">
              <div className="relative w-full h-24 bg-gradient-to-tr from-primary-500 to-accent2-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-react-native absolute -top-10 -right-10 w-32 aspect-square opacity-20"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                  <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                  <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                  <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                  <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                  <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                  <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                </svg>
                <div className="absolute -bottom-1/3 left-5 w-fit h-fit">
                  <figure
                    className="overflow-hidden relative w-24 aspect-square rounded-full border-2 border-dark-50"
                    style={{
                      borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70% ',
                    }}
                  >
                    <Image
                      fill
                      sizes="100%"
                      src={SDPhoto}
                      alt={'SebasDeveloper'}
                      placeholder="blur"
                      loading="lazy"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    />
                  </figure>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full h-full p-4 pt-6">
                <span className="span-lg whitespace-nowrap capitalize text-dark-950 dark:text-dark-50 font-semibold">
                  Sebastian pedroza
                </span>
                <span className="span-sm whitespace-nowrap text-dark-800 dark:text-dark-400">
                  @SebasDeveloper
                </span>
                <div className="flex flex-wrap gap-4 w-full mt-4">
                  <button
                    type="button"
                    className="button-primary padding-button w-full md:w-fit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-message"
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
                      <path d="M8 9h8" />
                      <path d="M8 13h6" />
                      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                    </svg>
                    Contáctame
                  </button>
                  <button
                    type="button"
                    className="button-outlined padding-button w-full md:w-fit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-download"
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
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 11l5 5l5 -5" />
                      <path d="M12 4l0 12" />
                    </svg>
                    Descargar CV
                  </button>
                </div>
              </div>
            </article>
          </section>
          <ul className="flex flex-col items-center gap-4 w-full pt-6 border-t border-customNeutral-700 ">
            {/* Map through the array of navigation links */}
            {links.map((link) => {
              const isActive = pathname.startsWith(link?.href);
              return (
                <li
                  key={`Navbar-link-${link.name}`}
                  className={`navbar-item-sm w-full ${isActive ? 'navbar-item-active-sm' : null}`}
                >
                  {/* Link to the specified href */}
                  <button
                    type="button"
                    className="flex items-center gap-3 w-full capitalize"
                    onClick={(e) => handleLink(e, link?.href)}
                  >
                    {/* Display the link name */}
                    {link?.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <section className="flex w-full"></section>
        </div>
      </article>
    </section>
  );
}
