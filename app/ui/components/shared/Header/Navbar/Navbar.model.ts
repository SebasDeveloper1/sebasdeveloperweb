import { GetNavbarInfoQuery } from '@/app/lib/api/generated/graphql';

export interface NavbarProps {
  personalInfo: GetNavbarInfoQuery;
}

export interface NavbarLinks {
  name: string;
  path: string;
}
