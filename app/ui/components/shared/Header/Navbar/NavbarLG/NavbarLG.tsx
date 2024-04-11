// Import necessary dependencies and types
import Link from 'next/link';
import { NavbarLGprops } from './NavbarLG.model';

export function NavbarLG({ links, pathname }: NavbarLGprops): JSX.Element {
  /**
   * Render the JSX for the NavbarLG component
   */
  return (
    <section className="hidden lg:flex justify-center items-center w-auto">
      <ul className="flex justify-center items-center gap-2 w-full">
        {/* Map through the array of navigation links */}
        {links.map((link) => {
          const isActive = pathname === link?.href;
          return (
            <li
              key={`Navbar-link-${link?.name}`}
              className={`navbar-item-lg w-full capitalize ${isActive ? 'navbar-item-active-lg' : ''}`}
            >
              {/* Link to the specified href */}
              <Link className="" href={link?.href} title={link?.name}>
                {/* Display the link name */}
                {link?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
