'use client';

import { Asset } from '@/app/lib/api/generated/graphql';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export function AboutMeImage({ cover }: { cover: Asset }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <figure
      ref={ref}
      className="z-[12] order-1 md:order-2 overflow-hidden relative w-8/12 md:w-80 aspect-square rounded-full drop-shadow-xl"
      style={{
        borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70% ',
      }}
    >
      {inView ? (
        <Image
          fill
          sizes="100%"
          src={`${cover?.url}`}
          alt={`${cover?.title}`}
          placeholder="blur"
          loading="lazy"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />
      ) : null}
    </figure>
  );
}
