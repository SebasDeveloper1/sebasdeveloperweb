import { JobExperience } from '@/app/lib/api/generated/graphql';

export interface ExperienceItemProps {
  experience: JobExperience;
}

export interface RendererProps {
  children: React.ReactNode;
  href?: string;
}
