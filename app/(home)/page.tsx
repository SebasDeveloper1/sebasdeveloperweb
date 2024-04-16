import { Hero } from '@/app/ui/components/Home/Hero';
import { AboutMe } from '@/app/ui/components/Home/AboutMe';
import { Tools } from '@/app/ui/components/Home/Tools';
import { Projects } from '@/app/ui/components/Home/Projects';
import { Experience } from '@/app/ui/components/Home/Experience';
import { Education } from '@/app/ui/components/Home/Education';
export default async function Home(): Promise<JSX.Element> {
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
