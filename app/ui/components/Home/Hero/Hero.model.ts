import { GetPersonalInfoQuery } from '@/app/lib/api/generated/graphql';

export interface HeroProps {
  personalInfo: GetPersonalInfoQuery;
}

export interface RendererProps {
  children: React.ReactNode;
  href?: string;
}
