import { ProjectCard } from '../ProjectCard';

const getConditionalClasses = (index: number) => {
  switch (index) {
    case 0:
      return 'aspect-square';
    case 1:
      return 'col-start-1 row-start-2';
    case 2:
      return 'col-start-2 row-start-2';
    case 3:
      return 'col-start-3 row-start-2';
    case 4:
      return 'col-span-2 col-start-2 row-start-1';
    default:
      return '';
  }
};
export function ProjectList() {
  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="overflow-hidden w-full h-full grid grid-cols-3 grid-rows-2 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className={`overflow-hidden rounded-lg ${getConditionalClasses(index)}`}
          >
            <ProjectCard />
          </li>
        ))}
      </ul>
    </section>
  );
}
