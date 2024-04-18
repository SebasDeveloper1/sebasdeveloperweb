import { JobExperience } from '@/app/lib/api/generated/graphql';

export interface ExperienceItemProps {
  experienceData: JobExperience;
}

export interface RendererProps {
  children: React.ReactNode;
  href?: string;
}
