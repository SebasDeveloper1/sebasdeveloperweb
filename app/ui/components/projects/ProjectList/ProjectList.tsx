'use client';
// External modules
import { useEffect, useState } from 'react'; // State and effect hooks from React

// Custom models
import { NavbarItems, ProjectListProps } from './ProjectList.model'; // Props for the project list component

// GraphQL types
import { Projects } from '@/app/lib/api/generated/graphql'; // GraphQL types for projects

// Custom components
import { ProjectCard } from '../ProjectCard'; // Component for project card
import { navbarItems } from './NavbarItems'; // Navbar items
import Loading from './Loading'; // Loading component

// Custom hook
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages

const initialCount = 8;

/**
 * Represents a list of projects component.
 * Renders a list of project cards based on the provided projects collection.
 * @param {ProjectListProps} projectsCollection - Collection of projects to be displayed.
 * @returns {JSX.Element} - JSX element representing the project list.
 */
export function ProjectList({
  projectsCollection,
}: ProjectListProps): JSX.Element {
  const { items } = projectsCollection;

  // State to manage filtered projects and visible items count
  const [filteredProjects, setFilteredProjects] = useState<Projects[]>(
    items as Projects[],
  );
  const [visibleItems, setVisibleItems] = useState<number>(initialCount);
  const [activeItem, setActiveItem] = useState<NavbarItems>(navbarItems[0]);

  /**
   * Handles scroll event to load more items when reaching the bottom of the page.
   */
  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolledToBottom =
        document.documentElement.offsetHeight -
          (window.innerHeight + document.documentElement.scrollTop) <=
        200;

      if (!isScrolledToBottom) return;

      // Calculate the new number of visible items
      const newVisibleItems = Math.min(
        filteredProjects.length,
        visibleItems + initialCount,
      );

      // Update the visible items count
      setVisibleItems(newVisibleItems);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filteredProjects, visibleItems]);

  /**
   * Handles menu item click event.
   * Updates the visible items based on the selected menu item.
   * @param {NavbarItems} item - The selected menu item.
   */
  const handleMenuClick = ({ item }: { item: NavbarItems }): void => {
    // Filter projects based on the selected menu item
    const updatedProjects: Projects[] =
      item.name === 'all'
        ? (items as Projects[])
        : (items.filter(
            (project) => project?.levelkey === item?.name,
          ) as Projects[]);

    // Determine the number of visible items
    const visibleItemCount = Math.min(updatedProjects.length, initialCount);

    // Update the visible items count
    setVisibleItems(visibleItemCount);

    // Set the filtered projects
    setFilteredProjects(updatedProjects);

    // Set the active menu item
    setActiveItem(item);
  };

  const isLoading = useLoadPage();

  if (isLoading) {
    return <Loading />;
  }

  // Render ProjectList component
  return (
    <section className="w-full bg-light-50 dark:bg-dark-900">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-10 w-full py-4 lg:py-16">
          <header className="overflow-hidden w-full lg:w-10/12 ">
            <ul className="relative overflow-x-auto hide-scrollbar flex flex-nowrap items-center gap-x-7 xl:gap-x-8 w-full p-4 lg:px-0">
              {navbarItems.map((item) => (
                <li key={`item-${item?.name}`}>
                  <button
                    type="button"
                    className={`group w-full flex flex-col items-center gap-4 span-sm font-semibold capitalize whitespace-nowrap text-light-500 hover:text-light-700 dark:text-dark-400 hover:dark:text-dark-200 ${activeItem?.name === item?.name ? 'text-primary-500 dark:text-primary-500' : ''}`}
                    onClick={() => handleMenuClick({ item })}
                  >
                    {item?.icon}
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>
          </header>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 w-11/12 lg:w-10/12">
            {filteredProjects.slice(0, visibleItems).map((project) => {
              return (
                <li
                  key={`project_${project?.name}`}
                  className={`overflow-hidden w-full aspect-[4/3] rounded-xl`}
                >
                  <ProjectCard projectData={project as Projects} />
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}
