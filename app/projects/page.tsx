// External modules
import { Metadata } from 'next';

// API and GraphQL imports
import { fetchProjectList } from '@/app/lib/api/data/fetch/projects';
import {
  GetProjectsListQuery,
  ProjectsCollection,
} from '@/app/lib/api/generated/graphql';

// UI Components for projects
import { Hero } from '@/app/ui/components/projects/Hero'; // Component for the hero section of projects
import { ProjectList } from '@/app/ui/components/projects/ProjectList'; // Component for the list of projects

// Shared UI Components
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper'; // Component for a scroll-to-top button

// Object and utilities
import { keywords } from '@/app/lib/objets/keywords'; // Object containing keywords

// Metadata for the page
export const metadata: Metadata = {
  title: 'SebasDeveloper | My Projects',
  description:
    '👨‍🚀 Explore my work and the projects I have been involved in, which have allowed me to showcase my skills and put my knowledge to the test. 🚀',
  keywords: keywords,
  authors: { name: 'Sebastian Pedroza' },
  openGraph: {
    type: 'website',
    title: 'SebasDeveloper | My Projects',
    description:
      '👨‍🚀 Explore my work and the projects I have been involved in, which have allowed me to showcase my skills and put my knowledge to the test. 🚀',
    siteName: 'SebasDeveloper.dev',
    images: [
      'https://images.ctfassets.net/8e4cftpjs07x/6FdP2LJX5KGgEuArdxfJ0O/a56e064ef348a1e826d5afd8ff8e6bcd/aboutme.jpg',
    ],
  },
};

// Async function to fetch project list and render the page
export default async function page(): Promise<JSX.Element> {
  // Fetch projects data
  const { projectsCollection }: GetProjectsListQuery = await fetchProjectList();

  // Return the page structure
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
