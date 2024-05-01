import { Hero } from '@/app/ui/components/Home/Hero';
import { AboutMe } from '@/app/ui/components/Home/AboutMe';
import { Tools } from '@/app/ui/components/Home/Tools';
import { Projects } from '@/app/ui/components/Home/Projects';
import { Experience } from '@/app/ui/components/Home/Experience';
import { Education } from '@/app/ui/components/Home/Education';
import { Metadata } from 'next';
import { keywords } from '../lib/objets/keywords';

export const metadata: Metadata = {
  title: 'SebasDeveloper | Ingeniero de Sistemas y Desarrollador Web.',
  description:
    'Ingeniero de Sistemas y Desarrollador Web con +2 años de experiencia. Especializado en el desarrollo de aplicaciones web únicas y de gran impacto.',
  keywords: keywords,
  authors: { name: 'Sebastian Pedroza' },
  openGraph: {
    type: 'website',
    title: 'SebasDeveloper | Ingeniero de Sistemas y Desarrollador Web.',
    description:
      'Ingeniero de Sistemas y Desarrollador Web con +2 años de experiencia. Especializado en el desarrollo de aplicaciones web únicas y de gran impacto.',
    siteName: 'SebasDeveloper.dev',
    images: [
      'https://images.ctfassets.net/8e4cftpjs07x/6jLRdeFwWpcPfxXidpJHd/abb100152fc40b927cfbcaac8c1290d0/sebastian-icon-logo.svg',
    ],
  },
};

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Tools />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
