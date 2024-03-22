'use client';
import { RefObject, useState } from 'react';
import { ToolCard } from '../ToolCard';
import { buttonText } from './ToolList.model';

const buttonText: buttonText = {
  showMore: {
    text: 'Ver más...',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
      </svg>
    ),
  },
  showLess: {
    text: 'Ver menos...',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-eye-closed"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
        <path d="M3 15l2.5 -3.8" />
        <path d="M21 14.976l-2.492 -3.776" />
        <path d="M9 17l.5 -4" />
        <path d="M15 17l-.5 -4" />
      </svg>
    ),
  },
};

export function ToolList({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLUListElement>;
}): JSX.Element {
  const arrayTest: number[] = Array.from({ length: 11 }, (_, index) => index);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? arrayTest : arrayTest.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-5 w-full">
        {visibleItems.map((index) => (
          <ToolCard key={index} /> // Agrega la prop key
        ))}
        <li className="overflow-hidden w-full min-h-[6.5rem] h-full rounded-lg border-2 border-dashed border-primary-500">
          <div className="flex place-items-center w-full min-h-[6.5rem] h-full p-4 text-center">
            <span className="w-full span-xl text-dark-800 dark:text-light-300">
              🚀 Mejorando a diario 😊
            </span>
          </div>
        </li>
      </ul>
      {arrayTest.length > 5 ? (
        <button
          type="button"
          className="w-full md:w-fit button-secondary padding-button"
          onClick={toggleShowAll}
        >
          {showAll ? (
            <>
              {buttonText?.showLess?.icon}
              {buttonText?.showLess?.text}
            </>
          ) : (
            <>
              {buttonText?.showMore?.icon}
              {buttonText?.showMore?.text}
            </>
          )}
        </button>
      ) : null}
    </section>
  );
}
