import { Hero } from '@/app/ui/components/Home/Hero';
import { AboutMe } from '@/app/ui/components/Home/AboutMe';
import { Tools } from '@/app/ui/components/Home/Tools';
import { Projects } from '@/app/ui/components/Home/Projects';
import { Experience } from '@/app/ui/components/Home/Experience';
import { Education } from '@/app/ui/components/Home/Education';
import { ContactFloatingButton } from '@/app/ui/components/shared/ContactFloatingButton';
export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Tools />
      <Projects />
      <Experience />
      <Education />
      <ContactFloatingButton />
    </main>
  );
}
