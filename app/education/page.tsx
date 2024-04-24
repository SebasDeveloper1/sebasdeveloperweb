import { Hero } from '@/app/ui/components/education/Hero';
import { CertificateList } from '@/app/ui/components/education/CertificateList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';
import { fetchCertificateList } from '../lib/api/data/fetch/education';
import {
  CertificationCollection,
  GetCertificateListQuery,
} from '../lib/api/generated/graphql';

export default async function page(): Promise<JSX.Element> {
  const { certificationCollection }: GetCertificateListQuery =
    await fetchCertificateList();
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <CertificateList
          certificationCollection={
            certificationCollection as CertificationCollection
          }
        />
      </main>
    </ScrollTopButtonWrapper>
  );
}
