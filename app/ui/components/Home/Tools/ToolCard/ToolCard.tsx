import Image from 'next/image';
import SDPhoto from '@/public/images/react_icon.svg';

export function ToolCard(): JSX.Element {
  return (
    <li className="overflow-hidden w-full rounded-lg bg-white hover:bg-dark-100 dark:bg-dark-900 dark:hover:bg-dark-800 shadow-xl">
      <a href="/" className="flex justify-between items-center w-full h-full">
        <div className="flex flex-col justify-center gap-3 w-full h-full p-4">
          <span className="span-base w-fit rounded-full px-2.5 py-1 font-medium leading-none text-light-50 dark:text-light-50 bg-accent2-500 dark:bg-accent2-500">
            React JS
          </span>
          <span className="w-full span-base leading-5 line-clamp-3 text-dark-800 dark:text-light-400">
            Biblioteca de JavaScript para contruir interfaces de usuario.
          </span>
        </div>
        <figure className="relative w-32 aspect-square translate-x-3">
          <Image
            fill
            sizes="100%"
            src={SDPhoto}
            alt={'SebasDeveloper'}
            placeholder="blur"
            loading="lazy"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
      </a>
    </li>
  );
}
