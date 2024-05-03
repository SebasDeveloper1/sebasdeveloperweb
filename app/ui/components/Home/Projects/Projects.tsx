// API and GraphQL imports
import { fetchHomeProjects } from '@/app/lib/api/data/fetch/home'; // Function to fetch home projects
import {
  GetHomeProjectsQuery,
  ProjectsCollection,
} from '@/app/lib/api/generated/graphql'; // GraphQL types and queries for home projects

// Custom components
import { ProjectList } from './ProjectList'; // Component for the list of projects
import { ProjectDesc } from './ProjectDesc'; // Component for the description of projects

/**
 * Represents a section displaying projects.
 * Fetches home project information and renders ProjectDesc and ProjectList components.
 * @returns {Promise<JSX.Element>} - Promise resolving to a JSX element representing the projects section.
 */
export async function Projects(): Promise<JSX.Element> {
  // Fetch home project information
  const { projectsCollection }: GetHomeProjectsQuery =
    await fetchHomeProjects();

  // Render the projects section
  return (
    <section className="bg-white dark:bg-dark-950">
      <div className="flex justify-center items-center w-full">
        <section className="grid grid-cols-1 md:grid-cols-7 justify-center gap-10 w-11/12 lg:w-10/12 py-16 md:py-32">
          <article className="col-span-3 w-full h-full">
            <ProjectDesc />
          </article>
          <article className="col-span-4 w-full">
            <ProjectList
              projectsCollection={projectsCollection as ProjectsCollection}
            />
          </article>
        </section>
      </div>
    </section>
  );
}
