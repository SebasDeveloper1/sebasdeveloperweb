import { Navbar } from './Navbar';
import { fetchNavbarInfo } from '@/app/lib/api/data/fetch/header';
import { GetNavbarInfoQuery } from '@/app/lib/api/generated/graphql';

export async function Header(): Promise<JSX.Element> {
  const personalInfo: GetNavbarInfoQuery = await fetchNavbarInfo();
  return <Navbar personalInfo={personalInfo} />;
}
