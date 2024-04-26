import { ProjectList } from './ProjectList';
import { fetchHomeProjects } from '@/app/lib/api/data/fetch/home';
import {
  GetHomeProjectsQuery,
  ProjectsCollection,
} from '@/app/lib/api/generated/graphql';
import { ProjectDesc } from './ProjectDesc';

export async function Projects(): Promise<JSX.Element> {
  const { projectsCollection }: GetHomeProjectsQuery =
    await fetchHomeProjects();

  return (
    <section className="bg-white dark:bg-dark-950">
      <div className="flex justify-center items-center w-full">
        <section className="grid grid-cols-1 md:grid-cols-7 justify-center gap-10 w-11/12 lg:w-10/12 py-16 md:py-32">
          <article className="col-span-3 flex flex-col justify-start gap-4 w-full h-full">
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
