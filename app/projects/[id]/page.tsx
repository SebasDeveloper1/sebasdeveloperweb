import { Details } from '@/app/ui/components/projects/projectDetails/Details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Details />
    </main>
  );
}
