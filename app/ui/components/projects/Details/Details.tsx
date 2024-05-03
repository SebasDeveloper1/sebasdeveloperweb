// API and GraphQL imports
import {
  GetProjectDetailsQuery,
  Projects,
  Asset,
} from '@/app/lib/api/generated/graphql'; // GraphQL types for project details
import { fetchProjectDetails } from '@/app/lib/api/data/fetch/projects'; // Function to fetch project details

// Custom components and models
import { ProjectSlider } from './ProjectSlider'; // Component for project slider
import { DetailsProps } from './Details.model'; // Props for the details component
import { Description } from './Description'; // Component for project description
import NotFound from '@/app/not-found'; // Component for not found page

/**
 * Represents the details page for a specific project.
 * Fetches project details using the provided slug and displays them.
 * @param {DetailsProps} slug - The slug of the project to fetch details for.
 * @returns {Promise<JSX.Element>} - JSX element representing the project details page.
 */
export async function Details({ slug }: DetailsProps): Promise<JSX.Element> {
  // Fetch project details based on the slug
  const { projectsCollection }: GetProjectDetailsQuery =
    await fetchProjectDetails({ slug });
  // Extract project data and images
  const projectData = projectsCollection?.items[0];
  const projectImages = projectData?.imagesCollection?.items;

  // If project data is not found, render the NotFound component
  if (!projectData) {
    return <NotFound />;
  }

  // Render the project details page
  return (
    <section className="overflow-hidden w-full h-full min-height-banner py-16 bg-light-50 dark:bg-dark-950">
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-14 gap-y-6 w-full h-full min-height-banner lg:pt-12">
        <article className="order-2 lg:order-1 col-span-1 lg:col-span-1 flex justify-end w-11/12 lg:w-full animate-fade-in-down">
          <Description projectData={projectData as Projects} />
        </article>
        <article className="order-1 lg:order-2 col-span-1 lg:col-span-1 w-full animate-fade-in-up">
          <ProjectSlider projectImages={projectImages as Asset[]} />
        </article>
      </section>
    </section>
  );
}
