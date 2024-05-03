// API and GraphQL imports
import { fetchNavbarInfo } from '@/app/lib/api/data/fetch/header'; // Function to fetch navbar information
import { GetNavbarInfoQuery } from '@/app/lib/api/generated/graphql'; // GraphQL query for navbar information

// Custom component
import { Navbar } from './Navbar'; // Component for the navbar

/**
 * Header component responsible for rendering the navigation bar.
 * It fetches the necessary data and passes it to the Navbar component.
 *
 * @returns {Promise<JSX.Element>} The JSX representation of the Header component.
 */
export async function Header(): Promise<JSX.Element> {
  // Fetch personal information for the Navbar
  const personalInfo: GetNavbarInfoQuery = await fetchNavbarInfo();

  // Render the Navbar component with personal information
  return <Navbar personalInfo={personalInfo} />;
}
