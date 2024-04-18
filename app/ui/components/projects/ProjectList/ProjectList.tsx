'use client';
import { useState } from 'react';
import { ProjectListProps } from './ProjectList.model';
import { Projects } from '@/app/lib/api/generated/graphql';
import { ProjectCard } from '../ProjectCard';
import { navbarItems } from './NavbarItems';

export function ProjectList({ projectsCollection }: ProjectListProps) {
  const { items } = projectsCollection;
  const [filteredProjects, setFilteredProjects] = useState<Projects[]>(
    items as Projects[],
  );
  const [activeItemId, setActiveItemId] = useState<string>('all');

  const handleMenuClick = ({ itemId }: { itemId: string }) => {
    const updatedProjects =
      itemId === 'all'
        ? (items as Projects[])
        : (items.filter(
            (project) => project?.levelkey === itemId,
          ) as Projects[]);

    setFilteredProjects(updatedProjects);
    setActiveItemId(itemId);
  };

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
                    className={`group w-full flex flex-col items-center gap-4 span-sm font-semibold capitalize whitespace-nowrap text-light-500 hover:text-light-700 dark:text-dark-400 hover:dark:text-dark-200 ${activeItemId === item?.name ? 'text-primary-500 dark:text-primary-500' : ''}`}
                    onClick={() => handleMenuClick({ itemId: item?.name })}
                  >
                    {item?.icon}
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>
          </header>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 w-11/12 lg:w-10/12">
            {filteredProjects.map((project) => {
              return (
                <li
                  key={`project_${project?.sys?.id}`}
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
