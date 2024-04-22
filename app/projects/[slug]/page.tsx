import { Details } from '@/app/ui/components/projects/Details';

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
