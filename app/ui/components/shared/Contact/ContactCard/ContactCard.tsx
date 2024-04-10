import Image from 'next/image';
import SDPhoto from '@/public/images/react_icon.svg';
export function ContactCard() {
  return (
    <a
      href="/"
      className="group overflow-hidden flex justify-center items-center gap-3 w-full h-full p-3 md:p-6 bg-light-100 md:hover:bg-light-200 dark:bg-dark-900 md:dark:hover:bg-dark-800 shadow-2xl transition-all"
    >
      <figure className="relative w-14 aspect-square md:grayscale md:group-hover:grayscale-0">
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
      <div className="flex flex-col justify-center w-full">
        <span className="w-full span-2xl font-bold leading-none text-primary-500 dark:text-primary-500">
          Github
        </span>
        <span className="w-full span-base font-medium text-light-700 dark:text-dark-300">
          @SebasDeveloper
        </span>
      </div>
    </a>
  );
}
