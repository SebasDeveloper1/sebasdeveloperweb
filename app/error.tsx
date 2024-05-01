/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import Image from 'next/image';
import error from '@/public/images/error.svg';
import { useRouter } from 'next/navigation';

//@ts-ignore
export default function GlobalError({ reset }) {
  const router = useRouter();

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen pt-16">
      <div className="flex flex-col justify-center items-center gap-6 w-11/12 h-screen">
        <span className="heading-1 font-extrabold text-dark-900 dark:text-light-50">
          ¡Upss!
        </span>

        <figure className="relative w-10/12 md:w-1/2 lg:w-1/5 aspect-square">
          {/* Use the Next.js Image component for optimized image loading */}
          <Image
            fill
            sizes="100%"
            src={error}
            alt={'No found'}
            placeholder="blur"
            loading="lazy"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
        <span className="mb-6 heading-3 font-semibold text-dark-700 dark:text-light-400 text-center">
          ¡Ha ocurrido un error!
        </span>
        <div className="flex flex-col justify-center items-center gap-6 lg:flex-row w-full">
          <button
            type="button"
            className="flex justify-center items-center gap-3 button-primary padding-button w-full lg:w-fit"
            onClick={reset}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-restore"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
              <path d="M3 4.001v5h5" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
            Reintentar
          </button>
          <button
            type="button"
            className="flex justify-center items-center gap-3 button-outlined padding-button w-full lg:w-fit"
            onClick={() => {
              router.back();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            Volver atrás
          </button>
        </div>
      </div>
    </section>
  );
}
