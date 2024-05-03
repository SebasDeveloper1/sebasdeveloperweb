// External modules
import { Metadata } from 'next';

// API and GraphQL imports
import { fetchCertificateList } from '@/app/lib/api/data/fetch/education'; // Function to fetch certificate list
import {
  CertificationCollection,
  GetCertificateListQuery,
} from '@/app/lib/api/generated/graphql'; // GraphQL types and queries for certificates

// Object and utilities
import { keywords } from '@/app/lib/objets/keywords'; // Object containing keywords

// UI Components for education
import { Hero } from '@/app/ui/components/education/Hero'; // Component for the hero section of education
import { CertificateList } from '@/app/ui/components/education/CertificateList'; // Component for the list of certificates

// Shared UI Components
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper'; // Component for a scroll-to-top button

/**
 * Metadata for the education page.
 */
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
      'https://images.ctfassets.net/8e4cftpjs07x/6FdP2LJX5KGgEuArdxfJ0O/a56e064ef348a1e826d5afd8ff8e6bcd/aboutme.jpg',
    ],
  },
};

/**
 * Asynchronously fetches certificate data and renders the education page.
 * @returns {Promise<JSX.Element>} - JSX element representing the education page.
 */
export default async function page(): Promise<JSX.Element> {
  // Fetch certificate data
  const { certificationCollection }: GetCertificateListQuery =
    await fetchCertificateList();

  // Return the education page structure
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
