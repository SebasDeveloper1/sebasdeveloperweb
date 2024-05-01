/* eslint-disable @next/next/no-img-element */
'use client';
import { useInView } from 'react-intersection-observer';
import { CertificateCardProps } from './CertificateCard.model';

export function CertificateCard({ certificateData }: CertificateCardProps) {
  const { title, school, image, url } = certificateData;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <a
      ref={ref}
      href={`${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`overflow-hidden group flex justify-center items-center gap-4 w-full h-full p-4 rounded-xl bg-light-100 hover:bg-dark-200/70 dark:bg-dark-900/30 dark:hover:bg-dark-900 shadow-sm ${!inView ? 'opacity-0' : 'animate-bounce-fade-in opacity-100'}`}
    >
      <figure className="relative w-20 aspect-square">
        {inView ? (
          <img
            src={`${image?.url}`}
            alt={`${image?.title}`}
            loading="lazy"
            className="absolute inset-0 rounded-full"
          />
        ) : null}
      </figure>
      <div className="flex flex-col justify-center gap-2 w-full h-full">
        <span className="w-full span-sm font-medium leading-5 line-clamp-2 text-dark-900 dark:text-light-200">
          {title}
        </span>
        <span className="span-sm font-semibold leading-none text-primary-600 dark:text-primary-400">
          {school}
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right w-6 text-light-400 dark:text-dark-600 group-hover:text-primary-500 dark:group-hover:text-primary-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </a>
  );
}
