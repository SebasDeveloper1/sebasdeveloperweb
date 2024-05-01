import { Hero } from '@/app/ui/components/projects/Hero';
import { ProjectList } from '@/app/ui/components/projects/ProjectList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';
import { fetchProjectList } from '../lib/api/data/fetch/projects';
import {
  GetProjectsListQuery,
  ProjectsCollection,
} from '../lib/api/generated/graphql';
import { Metadata } from 'next';
import { keywords } from '../lib/objets/keywords';

export const metadata: Metadata = {
  title: 'SebasDeveloper | Mis Proyectos',
  description:
    '👨‍🚀 Descubre mi trabajo y los proyectos en los que he participado y que me han permitido mostrar mis conocimientos y poner a prueba mis habilidades. 🚀',
  keywords: keywords,
  authors: { name: 'Sebastian Pedroza' },
  openGraph: {
    type: 'website',
    title: 'SebasDeveloper | Mis Proyectos',
    description:
      '👨‍🚀 Descubre mi trabajo y los proyectos en los que he participado y que me han permitido mostrar mis conocimientos y poner a prueba mis habilidades. 🚀',
    siteName: 'SebasDeveloper.dev',
    images: [
      'https://images.ctfassets.net/8e4cftpjs07x/6jLRdeFwWpcPfxXidpJHd/abb100152fc40b927cfbcaac8c1290d0/sebastian-icon-logo.svg',
    ],
  },
};

export default async function page(): Promise<JSX.Element> {
  const { projectsCollection }: GetProjectsListQuery = await fetchProjectList();
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <ProjectList
          projectsCollection={projectsCollection as ProjectsCollection}
        />
      </main>
    </ScrollTopButtonWrapper>
  );
}
