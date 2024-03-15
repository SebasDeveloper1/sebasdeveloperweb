import { ProjectCard } from '../ProjectCard';

const getConditionalClasses = (index: number) => {
  switch (index) {
    case 0:
      return 'md:col-span-2 md:row-span-2 w-full aspect-video';
    case 1:
      return 'md:col-start-3';
    case 2:
      return 'md:col-start-3 md:row-start-2';
    case 3:
      return 'md:row-start-3';
    case 4:
      return 'md:col-start-1 md:row-start-4';
    case 5:
      return 'md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-3';
    default:
      return '';
  }
};
export function ProjectList() {
  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="overflow-hidden w-full rounded-xl grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-4 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index} className={getConditionalClasses(index)}>
            <ProjectCard />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="w-full md:max-w-xs button-secondary padding-button"
        // onClick={}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
        </svg>
        Ver más proyectos
      </button>
    </section>
  );
}
