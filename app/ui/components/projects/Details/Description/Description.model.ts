import { Projects } from '@/app/lib/api/generated/graphql';

export interface DescriptionProps {
  projectData: Projects;
}
export interface RendererProps {
  children: React.ReactNode;
  href?: string;
}
