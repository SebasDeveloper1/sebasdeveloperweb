import Link from 'next/link';
import Image from 'next/image';
import SDPhoto from '@/public/images/sebastian2.jpg';

export function ProjectCard() {
  return (
    <Link
      href={'/projects'}
      className="group overflow-hidden relative w-full h-full"
    >
      <figure className="relative w-full h-full">
        <Image
          fill
          sizes="100%"
          src={SDPhoto}
          alt={'SebasDeveloper'}
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />
      </figure>
      <section className="opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100 transition-all duration-200 ease-in absolute inset-0 w-full h-full backdrop-blur-[8px]">
        <article className="flex flex-col justify-center items-center gap-4 w-full h-full p-4">
          <span className="w-full heading-3 font-bold text-light-50 dark:text-light-50 text-center capitalize truncate">
            Project Title
          </span>
          <span className="span-xl w-fit rounded-full px-2.5 py-1 font-medium leading-none text-light-50 dark:text-light-50 bg-accent2-500 dark:bg-accent2-500">
            Avanzado
          </span>
        </article>
      </section>
      <section className="md:hidden absolute inset-0 w-full h-full bg-gradient-to-t from-dark-950 to-transparent">
        <article className="flex flex-col justify-end w-full h-full p-4">
          <span className="w-full span-base font-semibold text-light-50 dark:text-light-50 capitalize truncate">
            Project Title
          </span>
          <span className="span-xs w-fit rounded-full px-2 py-0.5 font-medium leading-none text-light-50 dark:text-light-50 bg-accent2-500 dark:bg-accent2-500">
            Avanzado
          </span>
        </article>
      </section>
    </Link>
  );
}
