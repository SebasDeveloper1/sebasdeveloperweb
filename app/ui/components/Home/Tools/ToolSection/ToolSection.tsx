'use client';
import { useRef } from 'react';
import { ToolList } from '../ToolList';
import { ToolDesc } from '../ToolDesc';
import { ToolSectionProps } from './ToolSection.model';

export function ToolSection({ toolCollection }: ToolSectionProps): JSX.Element {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className="w-full border-b border-light-950/10 bg-white dark:bg-dark-900/20"
    >
      <ToolDesc />
      <section className="flex flex-col justify-center items-center w-full">
        <article className="flex flex-col gap-12 w-11/12 lg:w-10/12 pt-12 pb-16 md:pb-32">
          <ToolList sectionRef={sectionRef} toolCollection={toolCollection} />
        </article>
      </section>
    </section>
  );
}
