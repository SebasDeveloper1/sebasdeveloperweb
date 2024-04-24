'use client';
import { useInView } from 'react-intersection-observer';
import { JobExperience } from '@/app/lib/api/generated/graphql';
import { ExperienceListProps } from './ExperienceList.model';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';

export function ExperienceList({
  jobExperienceCollection,
}: ExperienceListProps) {
  const { items: jobExperienceArray } = jobExperienceCollection;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <ol className="relative w-11/12 border-s border-dark-400 dark:border-light-700">
      {jobExperienceArray.map((experience) => (
        <li
          ref={ref}
          key={`job_${experience?.sys?.id}`}
          className={`w-full ${!inView ? 'opacity-0' : 'animate-bounce-fade-in opacity-100'}`}
        >
          <div className="absolute w-8 aspect-square rounded-full mt-8 p-1 -start-4 text-yellow-200 dark:text-yellow-200 border-2 border-yellow-400 dark:border-yellow-400  bg-yellow-600 dark:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-full"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
          </div>
          <ExperienceItem experienceData={experience as JobExperience} />
        </li>
      ))}
    </ol>
  );
}
