import { Hero } from '@/app/ui/components/education/Hero';
import { CertificateList } from '@/app/ui/components/education/CertificateList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';
import { fetchCertificateList } from '../lib/api/data/fetch/education';
import {
  CertificationCollection,
  GetCertificateListQuery,
} from '../lib/api/generated/graphql';
import { Metadata } from 'next';
import { keywords } from '../lib/objets/keywords';

export const metadata: Metadata = {
  title: 'SebasDeveloper | Mi preparación',
  description:
    '🎓 Conoce las instituciones que han apoyado mi crecimiento y las habilidades que he obtenido en mi paso por ellas.',
  keywords: keywords,
  authors: { name: 'Sebastian Pedroza' },
  openGraph: {
    type: 'website',
    title: 'SebasDeveloper | Mi preparación',
    description:
      '🎓 Conoce las instituciones que han apoyado mi crecimiento y las habilidades que he obtenido en mi paso por ellas.',
    siteName: 'SebasDeveloper.dev',
    images: [
      'https://images.ctfassets.net/8e4cftpjs07x/6jLRdeFwWpcPfxXidpJHd/abb100152fc40b927cfbcaac8c1290d0/sebastian-icon-logo.svg',
    ],
  },
};

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
