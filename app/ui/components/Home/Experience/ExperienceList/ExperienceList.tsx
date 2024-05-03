'use client';
// Custom utilities and models
import { ExperienceListProps } from './ExperienceList.model'; // Props for the experience list component

// Custom components and hooks
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'; // Component for individual experience item
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages
import Loading from './Loading'; // Loading component

// GraphQL type
import { JobExperience } from '@/app/lib/api/generated/graphql'; // GraphQL type for job experience

/**
 * Represents a list of job experiences.
 * @param {ExperienceListProps} jobExperienceCollection - Collection of job experiences.
 * @returns {JSX.Element} - JSX element representing a list of job experiences.
 */
export function ExperienceList({
  jobExperienceCollection,
}: ExperienceListProps): JSX.Element {
  // Destructure the jobExperienceCollection prop
  const { items: jobExperienceArray } = jobExperienceCollection;

  // Check if the page is loading using the useLoadPage custom hook
  const isLoading = useLoadPage();

  // If the page is loading, render the Loading component
  if (isLoading) {
    return <Loading />;
  }

  // Render the list of job experiences
  return (
    <ol className="relative w-11/12 border-s border-dark-400 dark:border-light-700">
      {jobExperienceArray.map((experience) => (
        <li key={`job_${experience?.url}`} className="w-full">
          <ExperienceItem experienceData={experience as JobExperience} />
        </li>
      ))}
    </ol>
  );
}
