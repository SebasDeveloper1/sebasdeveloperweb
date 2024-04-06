import { Hero } from '@/app/ui/components/education/Hero';
import { CertificateList } from '@/app/ui/components/education/CertificateList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';

export default function page() {
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <CertificateList />
      </main>
    </ScrollTopButtonWrapper>
  );
}
