import { GetNavbarInfoQuery } from '@/app/lib/api/generated/graphql';
import { NavbarLinks } from '../Navbar.model';

export interface NavbarSMprops {
  personalInfo: GetNavbarInfoQuery;
  links: NavbarLinks[];
  pathname: string;
}
