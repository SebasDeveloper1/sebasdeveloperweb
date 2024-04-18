'use client';
// Import necessary dependencies and types
import { useState, useRef, useEffect } from 'react';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';

export function ContactFloatingButton(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactOptions: {
    name: string;
    url: string;
    icon: JSX.Element;
  }[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebas-developer/',
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 11l0 5" />
          <path d="M8 8l0 .01" />
          <path d="M12 16l0 -5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      ),
    },
    {
      name: 'Github',
      url: 'https://github.com/SebasDeveloper1',
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      url: 'https://t.me/JSPedroza',
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
      ),
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.link/74kdgc',
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      ),
    },
    {
      name: 'X',
      url: 'https://twitter.com/SebasDeveloper',
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sebasdeveloper/',
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      ),
    },
  ];

  const showMenuRef1 = useRef(null);
  const showMenuRef2 = useRef(null);

  useOnClickOutside(showMenuRef1, () => setShowMenu(false), showMenuRef2);

  if (!mounted) {
    return (
      <div className="z-[100] fixed bottom-5 right-5 p-3 rounded-full text-transparent animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-message w-10 aspect-square"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
        </svg>
      </div>
    );
  }

  // Return the JSX representation of the ScrollTopButtonWrapper component
  return (
    <>
      <button
        ref={showMenuRef1}
        type="button"
        className="z-[100] fixed bottom-5 right-5 button-primary p-3 rounded-full animate-jump-in"
        title={`${showMenu ? 'Cerrar' : 'Contactar'}`}
        aria-label={`${showMenu ? 'Cerrar' : 'Contactar'}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message w-9 aspect-square"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x w-9 aspect-square"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        )}
      </button>
      {showMenu ? (
        <div className="z-[99] fixed inset-0 mt-16 bg-dark-900/60 backdrop-blur-sm">
          <ul
            ref={showMenuRef2}
            className="absolute bottom-16 right-16 w-fit max-w-xs rounded-xl shadow-lg py-4 bg-dark-100 dark:bg-dark-800"
          >
            {contactOptions.map((option) => (
              <li key={`link-${option?.name}`} className="w-full">
                <a
                  href={option?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full button-text padding-button px-10 rounded-none justify-start navbar-item"
                >
                  {option?.icon}
                  {option?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
