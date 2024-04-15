import { GetHeroHomeInfoQuery } from '@/app/lib/api/generated/graphql';

export interface HeroProps {
  personalInfo: GetHeroHomeInfoQuery;
}

export interface RendererProps {
  children: React.ReactNode;
  href?: string;
}
