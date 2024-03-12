import { Hero } from '@/app/ui/components/Home/Hero';
import { AboutMe } from '@/app/ui/components/Home/AboutMe';
import { Tools } from './ui/components/Home/Tools';
export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Tools />
    </main>
  );
}
