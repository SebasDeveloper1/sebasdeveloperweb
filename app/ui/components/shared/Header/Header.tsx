import { fetchNavbarInfo } from '@/app/lib/api/data/fetch';
import { Navbar } from './Navbar';

export async function Header(): Promise<JSX.Element> {
  const personalInfo = await fetchNavbarInfo();
  return <Navbar personalInfo={personalInfo} />;
}
