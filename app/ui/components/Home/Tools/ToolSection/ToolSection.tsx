'use client';
// External modules
import { useRef } from 'react'; // Ref hook from React

// Custom components and models
import { ToolList } from '../ToolList'; // Component for the list of tools
import { ToolDesc } from '../ToolDesc'; // Component for the description of tools
import { ToolSectionProps } from './ToolSection.model'; // Props for the tool section

/**
 * Represents a section containing tools.
 * Renders a section with tool description and list of tools.
 * @param {ToolSectionProps} toolCollection - Props for the ToolSection component.
 * @returns {JSX.Element} - JSX element representing the section containing tools.
 */
export function ToolSection({ toolCollection }: ToolSectionProps): JSX.Element {
  // Create a reference to the section
  const sectionRef = useRef(null);

  // Render the section containing tools
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
