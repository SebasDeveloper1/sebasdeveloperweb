// Imports from Next.js and other external modules
import { Metadata } from 'next';

// Components of the Home UI
import { Hero } from '@/app/ui/components/Home/Hero'; // Component for the hero section
import { AboutMe } from '@/app/ui/components/Home/AboutMe'; // Component for the about me section
import { Tools } from '@/app/ui/components/Home/Tools'; // Component for tools section
import { Projects } from '@/app/ui/components/Home/Projects'; // Component for projects section
import { Experience } from '@/app/ui/components/Home/Experience'; // Component for experience section
import { Education } from '@/app/ui/components/Home/Education'; // Component for education section

// Objects and utilities
import { keywords } from '@/app/lib/objets/keywords'; // Object containing keywords
import { ScrollTopButtonWrapper } from '../ui/components/shared/ScrollTopButtonWrapper';

// Metadata for the page
export const metadata: Metadata = {
  title: 'SebasDeveloper | Systems Engineer and Web Developer.',
  description:
    'Systems Engineer and Web Developer with +2 years of experience. Specialized in the development of unique and impactful web applications.',
  keywords: keywords,
  authors: { name: 'Sebastian Pedroza' },
  openGraph: {
    type: 'website',
    title: 'SebasDeveloper | Systems Engineer and Web Developer.',
    description:
      'Systems Engineer and Web Developer with +2 years of experience. Specialized in the development of unique and impactful web applications.',
    siteName: 'SebasDeveloper.dev',
    images: [
      'https://images.ctfassets.net/8e4cftpjs07x/6FdP2LJX5KGgEuArdxfJ0O/a56e064ef348a1e826d5afd8ff8e6bcd/aboutme.jpg',
    ],
  },
};

// Home page component
export default function Home(): JSX.Element {
  return (
    <ScrollTopButtonWrapper>
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Tools />
        <Education />
      </main>
    </ScrollTopButtonWrapper>
  );
}
