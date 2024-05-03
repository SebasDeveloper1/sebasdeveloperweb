'use client';
// External modules
import Image from 'next/image'; // Image component from Next.js

// GraphQL and API related imports
import { Asset } from '@/app/lib/api/generated/graphql'; // GraphQL type for assets

// Custom hooks and components
import { useInView } from 'react-intersection-observer'; // Hook for observing elements entering the viewport
import useLoadPage from '@/app/lib/hooks/useLoadPage'; // Custom hook for loading pages
import Loading from './Loading'; // Loading component

/**
 * Component to display the cover image for the "About Me" section.
 * @param {Object} props - Props object containing the cover image.
 * @param {Asset} props.cover - Asset object representing the cover image.
 * @returns {JSX.Element} - JSX element representing the cover image.
 */
export function AboutMeImage({ cover }: { cover: Asset }): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isLoading = useLoadPage();

  // Render loading skeleton while page is loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the cover image
  return (
    <figure
      ref={ref}
      className={`z-[12] order-1 md:order-2 overflow-hidden relative w-8/12 md:w-80 aspect-square rounded-full drop-shadow-xl ${!inView ? 'opacity-0' : 'animate-fade-in-left opacity-100'}`}
      style={{
        borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70% ',
      }}
    >
      <Image
        fill
        sizes="100%"
        src={`${cover?.url}`}
        alt={`${cover?.title}`}
        placeholder="blur"
        priority
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
      />
    </figure>
  );
}
