'use client';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
enum ThemeOptionsEnum {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
}

const themeOptions: {
  name: string;
  theme: ThemeOptionsEnum;
  icon: JSX.Element;
}[] = [
  {
    name: 'Light',
    theme: ThemeOptionsEnum.LIGHT,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-sun"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
    ),
  },
  {
    name: 'Dark',
    theme: ThemeOptionsEnum.DARK,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-moon"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    ),
  },
  {
    name: 'System',
    theme: ThemeOptionsEnum.SYSTEM,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-device-desktop"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
        <path d="M7 20h10" />
        <path d="M9 16v4" />
        <path d="M15 16v4" />
      </svg>
    ),
  },
];

export function ThemeSwich() {
  const [mounted, setMounted] = useState(false);
  const [menuTheme, setMenuTheme] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuThemeRef1 = useRef(null);
  const menuThemeRef2 = useRef(null);
  useOnClickOutside(menuThemeRef1, () => setMenuTheme(false), menuThemeRef2);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full aspect-square padding-icon rounded-lg bg-light-300 dark:bg-dark-700 text-transparent animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-desktop"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
          <path d="M7 20h10" />
          <path d="M9 16v4" />
          <path d="M15 16v4" />
        </svg>
      </div>
    );
  }

  const handleTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setMenuTheme(false);
  };

  return (
    <>
      <button
        type="button"
        ref={menuThemeRef1}
        className="relative button-text padding-icon navbar-item "
        onClick={() => setMenuTheme(!menuTheme)}
      >
        {theme === 'system' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-device-desktop"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
            <path d="M7 20h10" />
            <path d="M9 16v4" />
            <path d="M15 16v4" />
          </svg>
        ) : theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-sun"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        ) : theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        ) : null}
      </button>
      {menuTheme ? (
        <div className="fixed inset-0 mt-16 bg-dark-900/60 backdrop-blur-sm">
          <ul
            ref={menuThemeRef2}
            className="absolute top-4 right-4 w-fit max-w-xs rounded-lg shadow-lg py-4 bg-dark-100 dark:bg-dark-800 "
          >
            {themeOptions.map((option) => (
              <li key={`theme-${option?.theme}`} className="w-full">
                <button
                  type="button"
                  className="w-full button-text padding-button px-10 rounded-none justify-start navbar-item"
                  onClick={() => handleTheme(option?.theme)}
                >
                  {option?.icon}
                  {option?.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
