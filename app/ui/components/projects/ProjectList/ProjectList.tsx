import Image from 'next/image';
import Link from 'next/link';
import SDPhoto from '@/public/images/sebastian2.jpg';

export function ProjectList() {
  const arrayTest: number[] = Array.from({ length: 20 }, (_, index) => index);

  const navbarItems = [
    {
      name: 'all',
      title: 'Todos',
      icon: (
        <svg width={48} height={48} fill="none" aria-hidden="true">
          <path d="M5 8h36v32H5V8Z" fill="currentColor" fillOpacity={0} />
          <path
            d="M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7v34"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      active: false,
    },
    {
      name: 'basic',
      title: 'Básico',
      icon: (
        <svg width={48} height={48} fill="none" aria-hidden="true">
          <path
            d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z"
            fill="currentColor"
            fillOpacity=".1"
            stroke="currentColor"
            strokeWidth={2}
          />
          <path
            d="M15 7v34"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      ),
      active: false,
    },
    {
      name: 'intermediate',
      title: 'Intermedio',
      icon: (
        <svg width={48} height={48} fill="none" aria-hidden="true">
          <path
            d="M6 8h32a4 4 0 0 1 4 4v28H6V8Z"
            fill="currentColor"
            fillOpacity={0}
          />
          <path
            d="M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      active: false,
    },
    {
      name: 'advanced',
      title: 'Avanzado',
      icon: (
        <svg width={48} height={48} fill="none" aria-hidden="true">
          <path
            d="M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z"
            fill="currentColor"
            fillOpacity={0}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M15 7v34M17 13h-2M43 13h-6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      ),
      active: false,
    },
  ];
  return (
    <section className="w-full bg-light-50 dark:bg-dark-900">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-10 w-full py-4 lg:py-16">
          <header className="overflow-hidden w-full lg:w-10/12 ">
            <ul className="relative overflow-x-auto hide-scrollbar flex flex-nowrap items-center gap-x-7 xl:gap-x-8 w-full p-4 lg:px-0">
              {navbarItems.map((item) => (
                <li key={`item-${item?.name}`}>
                  <button
                    type="button"
                    className="group w-full flex flex-col items-center gap-4 span-sm font-semibold capitalize whitespace-nowrap text-light-500 hover:text-light-700 dark:text-dark-400 dark:hover:text-dark-200"
                  >
                    {item?.icon}
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>
          </header>
          <ul className="columns-3xs gap-4 md:gap-6 w-11/12 lg:w-10/12">
            {arrayTest.map((index) => {
              const randomIndex = Math.floor(Math.random() * 100);
              return (
                <li
                  key={index}
                  className={`overflow-hidden w-full ${randomIndex % 2 === 0 ? 'aspect-video' : 'aspect-[4/3]'} mb-4 md:mb-6 rounded-lg`}
                >
                  <Link
                    href={'/projects'}
                    className="group overflow-hidden relative w-full h-full rounded-lg"
                  >
                    <figure className="relative w-full h-full">
                      <Image
                        fill
                        sizes="100%"
                        src={SDPhoto}
                        alt={'SebasDeveloper'}
                        placeholder="blur"
                        loading="lazy"
                        className="object-cover object-center transform lg:group-hover:scale-110 transition-transform duration-300 "
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                      />
                    </figure>
                    <section className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-950 from-5% to-transparent to-100%">
                      <article className="flex flex-col justify-end w-full h-full p-3">
                        <span className="span-sm w-fit rounded-full px-1.5 py-0.5 font-medium leading-none text-light-50 dark:text-light-50 bg-accent2-500 dark:bg-accent2-500">
                          Avanzado
                        </span>
                        <span className="w-full span-lg font-medium text-white dark:text-white capitalize truncate">
                          Project Title
                        </span>
                      </article>
                    </section>
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}
