import { Hero } from '@/app/ui/components/projects/Hero';
import { ProjectList } from '@/app/ui/components/projects/ProjectList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';
import { ContactFloatingButton } from '@/app/ui/components/shared/ContactFloatingButton';

export default function page() {
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <ProjectList />
        <ContactFloatingButton />
      </main>
    </ScrollTopButtonWrapper>
  );
}
