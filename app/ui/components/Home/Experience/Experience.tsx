import {
  GetHomeExperienceQuery,
  JobExperienceCollection,
} from '@/app/lib/api/generated/graphql';
import { fetchHomeExperience } from '@/app/lib/api/data/fetch/home';
import { ExperienceList } from './ExperienceList';
import { ExperienceDesc } from './ExperienceDesc';

export async function Experience(): Promise<JSX.Element> {
  const { jobExperienceCollection }: GetHomeExperienceQuery =
    await fetchHomeExperience();

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
