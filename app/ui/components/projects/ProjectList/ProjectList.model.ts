import { ProjectsCollection } from '@/app/lib/api/generated/graphql';

export interface ProjectListProps {
  projectsCollection: ProjectsCollection;
}

export interface NavbarItems {
  name: string;
  title: string;
  icon: JSX.Element;
}
