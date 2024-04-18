import { Hero } from '@/app/ui/components/projects/Hero';
import { ProjectList } from '@/app/ui/components/projects/ProjectList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';
import { fetchProjectList } from '../lib/api/data/fetch/projects';
import { GetProjectsListQuery, ProjectsCollection } from '../lib/api/generated/graphql';

export default async function page(): Promise<JSX.Element> {
  const { projectsCollection }: GetProjectsListQuery = await fetchProjectList();
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <ProjectList projectsCollection={projectsCollection as ProjectsCollection} />
      </main>
    </ScrollTopButtonWrapper>
  );
}
