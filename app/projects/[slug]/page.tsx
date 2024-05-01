import { fetchProjectDetails } from '@/app/lib/api/data/fetch/projects';
import { GetProjectDetailsQuery } from '@/app/lib/api/generated/graphql';
import { keywords } from '@/app/lib/objets/keywords';
import NotFound from '@/app/not-found';
import { Details } from '@/app/ui/components/projects/Details';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;

  const { projectsCollection }: GetProjectDetailsQuery =
    await fetchProjectDetails({
      slug,
    });

  const projectData = projectsCollection?.items[0];

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
