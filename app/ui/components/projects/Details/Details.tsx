import {
  GetProjectDetailsQuery,
  Projects,
  Asset,
} from '@/app/lib/api/generated/graphql';
import { ProjectSlider } from './ProjectSlider';
import { fetchProjectDetails } from '@/app/lib/api/data/fetch/projects';
import { DetailsProps } from './Details.model';
import { Description } from './Description';
import NotFound from '@/app/not-found';

export async function Details({ slug }: DetailsProps): Promise<JSX.Element> {
  const { projectsCollection }: GetProjectDetailsQuery =
    await fetchProjectDetails({
      slug,
    });
  const projectData = projectsCollection?.items[0];
  const projectImages = projectData?.imagesCollection?.items;

  if (!projectData) {
    return <NotFound />;
  }

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
