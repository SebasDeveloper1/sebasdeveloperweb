import { Details } from '@/app/ui/components/projects/projectDetails/Details';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Details />
    </main>
  );
}
