import { Hero } from '@/app/ui/components/Home/Hero';
import { AboutMe } from '@/app/ui/components/Home/AboutMe';
import { Tools } from '@/app/ui/components/Home/Tools';
import { Projects } from '@/app/ui/components/Home/Projects';
export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Tools />
      <Projects />
    </main>
  );
}
