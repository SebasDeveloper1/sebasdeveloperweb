// API and GraphQL imports
import {
  GetHomeExperienceQuery,
  JobExperienceCollection,
} from '@/app/lib/api/generated/graphql'; // GraphQL types and queries for home experience
import { fetchHomeExperience } from '@/app/lib/api/data/fetch/home'; // Function to fetch home experience

// Custom components
import { ExperienceList } from './ExperienceList'; // Component for the list of experiences
import { ExperienceDesc } from './ExperienceDesc'; // Component for the description of experiences

/**
 * Represents a section displaying job experiences.
 * Fetches home experience data and renders ExperienceDesc and ExperienceList components.
 * @returns {Promise<JSX.Element>} - Promise resolving to a JSX element representing the experience section.
 */
export async function Experience(): Promise<JSX.Element> {
  // Fetch home experience data
  const { jobExperienceCollection }: GetHomeExperienceQuery =
    await fetchHomeExperience();

  // Render the experience section
  return (
    <section className="bg-light-100 dark:bg-dark-900">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12 py-16 md:py-32">
          <div className="flex flex-col justify-center items-center gap-16 w-full">
            <ExperienceDesc />
            <ExperienceList
              jobExperienceCollection={
                jobExperienceCollection as JobExperienceCollection
              }
            />
          </div>
        </article>
      </div>
    </section>
  );
}
