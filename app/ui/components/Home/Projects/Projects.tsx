import { ProjectList } from './ProjectList';

export function Projects() {
  return (
    <section className="bg-light-50 dark:bg-dark-900">
      <div className="flex justify-center items-center w-full py-14">
        <div className="w-11/12 lg:w-10/12 py-8 md:py-16 border-t border-secondary-500">
          <article className="flex flex-col justify-center items-center gap-16">
            <div className="flex flex-col justify-center items-center gap-6 w-full text-center">
              <div className="flex flex-col justify-center items-center gap-4 w-full mb-8">
                <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-4 border-sky-400 bg-sky-600 text-sky-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-devices w-4/5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                    <path d="M16 9h2" />
                  </svg>
                </div>
                <h2 className="heading-2 w-full font-bold text-dark-900 dark:text-light-50">
                  Últimos proyectos
                </h2>
              </div>
              <p className="paragraph-xl max-w-prose font-medium text-dark-700 dark:text-light-400">
                Me apasiona participar en proyectos que desafíen mis
                habilidades, permitiéndome perfeccionar mis técnicas y
                brindándome la oportunidad de mostrar al mundo mi potencial como
                profesional.
              </p>
            </div>
            <ProjectList />
          </article>
        </div>
      </div>
    </section>
  );
}
