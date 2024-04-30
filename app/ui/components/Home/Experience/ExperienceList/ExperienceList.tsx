'use client';
import { JobExperience } from '@/app/lib/api/generated/graphql';
import { ExperienceListProps } from './ExperienceList.model';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import useLoadPage from '@/app/lib/hooks/useLoadPage';
import Loading from './Loading';

export function ExperienceList({
  jobExperienceCollection,
}: ExperienceListProps) {
  const { items: jobExperienceArray } = jobExperienceCollection;

  const isLoading = useLoadPage();

  if (isLoading) {
    return <Loading />;
  }

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
