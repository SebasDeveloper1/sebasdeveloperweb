'use client';
// External modules
import Image from 'next/image'; // Image component from Next.js

// External hook
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

// Custom models
import { ToolCardProps } from './ToolCard.model'; // Props for the tool card component

/**
 * Represents a card displaying information about a tool.
 * Renders tool data including name, description, URL, and logo.
 * @param {ToolCardProps} toolData - Data of the tool to be displayed.
 * @returns {JSX.Element} - JSX element representing the tool card.
 */
export function ToolCard({ toolData }: ToolCardProps): JSX.Element {
  // Destructure tool data
  const { name, description, url, logo } = toolData;

  // Check if the component is in view using useInView hook
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Render the tool card
  return (
    <li
      ref={ref}
      className={`overflow-hidden w-full h-full rounded-xl bg-light-100 hover:bg-dark-200/70 dark:bg-dark-900/30 dark:hover:bg-dark-900 shadow-sm ${!inView ? 'opacity-0' : 'animate-bounce-fade-in opacity-100'}`}
    >
      <a
        href={`${url}`}
        className="flex justify-between items-center w-full h-full"
      >
        <div className="flex flex-col gap-3 w-full h-full p-4">
          <span className="span-base w-fit rounded-full px-2.5 py-1 font-medium leading-none text-light-50 dark:text-light-50 bg-accent2-500 dark:bg-accent2-500">
            {name}
          </span>
          <span className="w-full span-sm leading-5 line-clamp-3 text-dark-800 dark:text-light-400">
            {description}
          </span>
        </div>
        <figure className="relative w-24 aspect-square translate-x-3 rounded-xl">
          {inView ? (
            <Image
              fill
              sizes="100%"
              src={`${logo?.url}`}
              alt={`${logo?.title}`}
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          ) : null}
        </figure>
      </a>
    </li>
  );
}
