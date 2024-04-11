import { Hero } from '@/app/ui/components/Home/Hero';
import { AboutMe } from '@/app/ui/components/Home/AboutMe';
import { Tools } from '@/app/ui/components/Home/Tools';
import { Projects } from '@/app/ui/components/Home/Projects';
import { Experience } from './ui/components/Home/Experience';
import { Education } from './ui/components/Home/Education';
import { Contact } from './ui/components/Home/Contact';
import { ContactButtonWrapper } from './ui/components/shared/ContactButtonWrapper';
export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Tools />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <ContactButtonWrapper />
    </main>
  );
}
