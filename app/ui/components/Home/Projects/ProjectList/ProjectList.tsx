'use client';
import { Projects } from '@/app/lib/api/generated/graphql';
import { ProjectCard } from '../ProjectCard';
import { ProjectListProps } from './projectList.model';
import useLoadPage from '@/app/lib/hooks/useLoadPage';
import Loading from './Loading';
import { useInView } from 'react-intersection-observer';

const getConditionalClasses = (index: number) => {
  switch (index) {
    case 0:
      return 'aspect-square';
    case 1:
      return 'col-span-2 col-start-2 row-start-1';
    case 2:
      return 'col-start-1 row-start-2';
    case 3:
      return 'col-start-2 row-start-2';
    case 4:
      return 'col-start-3 row-start-2';
    default:
      return '';
  }
};
export function ProjectList({ projectsCollection }: ProjectListProps) {
  const projectList = projectsCollection?.items;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isLoading = useLoadPage();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center items-center gap-16 w-full ${!inView ? 'opacity-0' : 'animate-fade-in-left opacity-100'}`}
    >
      <ul className="overflow-hidden w-full h-full grid grid-cols-3 grid-rows-2 gap-4">
        {projectList.map((project, index) => (
          <li
            key={index}
            className={`overflow-hidden rounded-xl ${getConditionalClasses(index)}`}
          >
            <ProjectCard projectData={project as Projects} />
          </li>
        ))}
      </ul>
    </section>
  );
}
