import {
  GetHomeExperienceQuery,
  JobExperience,
  JobExperienceCollection,
} from '@/app/lib/api/generated/graphql';
import { ExperienceItem } from './ExperienceItem/ExperienceItem';
import { fetchHomeExperience } from '@/app/lib/api/data/fetch';

export async function Experience(): Promise<JSX.Element> {
  const { jobExperienceCollection }: GetHomeExperienceQuery =
    await fetchHomeExperience();

  const { items: jobExperienceArray }: JobExperienceCollection =
    jobExperienceCollection as JobExperienceCollection;

  return (
    <section className="bg-light-100 dark:bg-dark-900">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12 py-16">
          <div className="flex flex-col justify-center items-center gap-16 w-full">
            <div className="flex flex-col justify-center gap-8 w-full">
              <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-yellow-400 bg-yellow-600 text-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-4/5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <h2 className="heading-3 w-full font-bold text-dark-900 dark:text-light-50">
                Experiencia laboral
              </h2>
            </div>
            <ol className="relative w-11/12 border-s border-dark-400 dark:border-light-700">
              {jobExperienceArray.map((experience) => (
                <li key={`job_${experience?.sys?.id}`} className="w-full">
                  <ExperienceItem experience={experience as JobExperience} />
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}
