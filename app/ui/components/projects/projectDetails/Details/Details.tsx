import { ProjectDesc } from './projectDesc';
import { ProjectSlider } from './ProjectSlider';

export function Details() {
  return (
    <section className="w-full h-full min-height-banner py-16 bg-light-50 dark:bg-dark-950">
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-14 gap-y-6 w-full h-full min-height-banner lg:pt-12">
        <article className="order-2 lg:order-1 col-span-1 lg:col-span-1 flex justify-end w-11/12 lg:w-full">
          <ProjectDesc />
        </article>
        <article className="order-1 lg:order-2 col-span-1 lg:col-span-1 w-full">
          <ProjectSlider />
        </article>
      </section>
    </section>
  );
}
