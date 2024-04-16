'use client';
import { useRef } from 'react';
import { ToolList } from '../ToolList';
import { ToolDesc } from '../ToolDesc';
import { ToolCollection } from '@/app/lib/api/generated/graphql';

export function ToolSection({
  toolCollection,
}: {
  toolCollection: ToolCollection;
}): JSX.Element {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="w-full">
      <ToolDesc />
      <section className="flex flex-col justify-center items-center w-full border-t lg:border-dark-900/10 dark:border-light-50/[0.06] bg-light-50 dark:bg-dark-950">
        <article className="flex flex-col gap-12 w-11/12 lg:w-10/12 pt-12 pb-16 md:pb-32">
          <ToolList sectionRef={sectionRef} toolCollection={toolCollection} />
        </article>
      </section>
    </section>
  );
}
