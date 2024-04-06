import { Hero } from '@/app/ui/components/projects/Hero';
import { ProjectList } from '../ui/components/projects/ProjectList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';

export default function page() {
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <ProjectList />
      </main>
    </ScrollTopButtonWrapper>
  );
}
