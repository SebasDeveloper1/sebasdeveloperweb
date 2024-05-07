'use client';
// External modules
import Image from 'next/image'; // Image component from Next.js
import Link from 'next/link'; // Link component from Next.js

// External hook
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport

// Custom models
import { ProjectCardProps } from './ProjectCard.model'; // Props for the project card component

// Utility
import { routesPaths } from '@/app/routes/routes'; // Paths for application routes

/**
 * Represents a project card component.
 * Renders a clickable card displaying project information and an image.
 * @param {ProjectCardProps} projectData - Data of the project to be displayed on the card.
 * @returns {JSX.Element} - JSX element representing the project card.
 */
export function ProjectCard({ projectData }: ProjectCardProps): JSX.Element {
  const { name, slug, level, imagesCollection } = projectData;

  // Hook to detect if the card is in the view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  //Render ProjectCard componet
  return (
    <Link
      ref={ref}
      href={`${routesPaths?.projectDetails}${slug}`}
      className={`group relative overflow-hidden w-full aspect-[4/3] rounded-xl ${!inView ? 'opacity-0' : 'animate-bounce-fade-in opacity-100'}`}
    >
      {inView ? (
        <figure className="relative w-full h-full bg-img_bg bg-cover bg-center">
          <Image
            fill
            sizes="100%"
            src={`${imagesCollection?.items[0]?.url}`}
            alt={`${imagesCollection?.items[0]?.title}`}
            placeholder="blur"
            loading="lazy"
            className={`object-cover object-center lg:transform lg:group-hover:scale-150 lg:transition-all ${!inView ? 'opacity-0' : 'animate-fade-in duration-300 opacity-100'}`}
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
      ) : null}

      <section className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent">
        <article className="flex flex-col justify-end w-full h-full p-2 md:p-3">
          <span className="span-base md:span-lg w-full font-semibold text-light-50 dark:text-light-50 capitalize truncate">
            {name}
          </span>
        </article>
      </section>
      <span className="absolute top-0 right-0 span-xs md:span-sm w-fit rounded-bl-full px-4 py-0.5 leading-5 font-semibold text-accent5-50 bg-accent5-600 capitalize">
        {level}
      </span>
    </Link>
  );
}
