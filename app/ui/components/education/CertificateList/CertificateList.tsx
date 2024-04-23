import { CertificateCard } from './CertificateCard';

/* eslint-disable @next/next/no-img-element */
const navbarItems = [
  {
    name: 'all',
    title: 'Todas',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-layout-2 w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'profesional',
    title: 'Profesional',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-school w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'web',
    title: 'Web',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-devices-code w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1 -1 1" />
        <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" />
        <path d="M20 21l2 -2l-2 -2" />
        <path d="M17 17l-2 2l2 2" />
        <path d="M16 9h2" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'mobile',
    title: 'Móvil',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-code w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
        <path d="M20 21l2 -2l-2 -2" />
        <path d="M17 17l-2 2l2 2" />
        <path d="M11 4h2" />
        <path d="M12 17v.01" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'english',
    title: 'Inglés',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-language w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 5h7" />
        <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
        <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
        <path d="M12 20l4 -9l4 9" />
        <path d="M19.1 18h-6.2" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'softskills',
    title: 'Hab. Blandas',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart-code w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572" />
        <path d="M20 21l2 -2l-2 -2" />
        <path d="M17 17l-2 2l2 2" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'challenge',
    title: 'Retos',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-award w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
        <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
        <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
      </svg>
    ),
    active: false,
  },
  {
    name: 'event',
    title: 'Eventos',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-ticket w-10 md:w-12"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 5l0 2" />
        <path d="M15 11l0 2" />
        <path d="M15 17l0 2" />
        <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
      </svg>
    ),
    active: false,
  },
];
const arrayTest: number[] = Array.from({ length: 20 }, (_, index) => index);
export function CertificateList() {
  return (
    <section className="w-full bg-white dark:bg-dark-950">
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
          <section className="flex flex-col justify-center gap-8 w-11/12 lg:w-10/12">
            <h2 className="heading-5 font-medium text-light-800 dark:text-dark-100">
              Certificaciones (100)
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full">
              {arrayTest.map((index) => (
                <li key={index} className="w-full h-full">
                  <CertificateCard />
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
