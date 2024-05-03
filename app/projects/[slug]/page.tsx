// External modules
import NotFound from '@/app/not-found';

// API and GraphQL imports
import { fetchProjectDetails } from '@/app/lib/api/data/fetch/projects'; // Function to fetch project details
import { GetProjectDetailsQuery } from '@/app/lib/api/generated/graphql'; // GraphQL query for project details

// Object and utilities
import { keywords } from '@/app/lib/objets/keywords'; // Object containing keywords

// UI Components for projects
import { Details } from '@/app/ui/components/projects/Details'; // Component for project details

/**
 * Asynchronously generates metadata for the project page.
 * @param {Object} params - Parameters object containing the project slug.
 * @returns {Object} - Metadata object containing title, description, keywords, authors, and openGraph data.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;

  // Fetch project details
  const { projectsCollection }: GetProjectDetailsQuery =
    await fetchProjectDetails({
      slug,
    });

  // Get project data
  const projectData = projectsCollection?.items[0];

  // If project data is not found, render a 404 page
  if (!projectData) {
    return <NotFound />;
  }

  // Construct metadata object
  return {
    title: `SebasDeveloper | ${projectData?.name}`,
    description: projectData?.description,
    keyworks: [...keywords, projectData?.tools, projectData?.name],
    authors: [{ name: 'Sebastian Pedroza' }, { name: 'SebasDeveloper' }],
    openGraph: {
      type: 'website',
      title: `SebasDeveloper | ${projectData?.name}`,
      description: projectData?.description,
      siteName: 'Cinergia',
      images: projectData?.imagesCollection?.items[0]?.url,
    },
  };
}

/**
 * Page component to display project details.
 * @param {Object} props - Props object containing the project slug.
 * @returns {JSX.Element} - JSX element representing the project details page.
 */

export default function Page({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return (
    <main>
      <Details slug={params?.slug} />
    </main>
  );
}
