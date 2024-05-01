'use client';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectCardProps } from './ProjectCard.model';
import { routesPaths } from '@/app/routes/routes';

export function ProjectCard({ projectData }: ProjectCardProps) {
  const { name, slug, level, imagesCollection } = projectData;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Link
      ref={ref}
      href={`${routesPaths?.projectDetails}${slug}`}
      className={`group relative w-full h-full ${!inView ? 'opacity-0' : 'animate-fade-in opacity-100'}`}
    >
      <figure className="relative w-full h-full">
        {inView ? (
          <Image
            fill
            sizes="100%"
            src={`${imagesCollection?.items[0]?.url}`}
            alt={`${imagesCollection?.items[0]?.title}`}
            placeholder="blur"
            loading="lazy"
            className="object-cover object-center lg:transform lg:group-hover:scale-150 lg:transition-all"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        ) : null}
      </figure>
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
