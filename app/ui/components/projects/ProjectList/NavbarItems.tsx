import { NavbarItems } from './ProjectList.model';

/**
 * Array of navigation items for filtering projects.
 */
export const navbarItems: NavbarItems[] = [
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
  },
];
