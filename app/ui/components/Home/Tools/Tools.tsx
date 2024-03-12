import { ToolList } from './ToolList';

export function Tools(): JSX.Element {
  return (
    <section className="bg-light-100 dark:bg-dark-950">
      <div className="flex justify-center items-center w-full py-14 bg-bgSection1 bg-cover bg-center">
        <div className="w-11/12 lg:w-10/12 py-8 md:py-16 border-t border-primary-500">
          <article className="flex flex-col justify-center items-center gap-16">
            <div className="flex flex-col justify-center items-center gap-6 w-full text-center">
              <div className="flex flex-col justify-center items-center gap-4 w-full mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-settings-cog w-14 aspect-square p-1 rounded-full border-[3px] border-indigo-300 bg-indigo-500 text-indigo-100"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.003 21c-.732 .001 -1.465 -.438 -1.678 -1.317a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.886 .215 1.325 .957 1.318 1.694" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M19.001 15.5v1.5" />
                  <path d="M19.001 21v1.5" />
                  <path d="M22.032 17.25l-1.299 .75" />
                  <path d="M17.27 20l-1.3 .75" />
                  <path d="M15.97 17.25l1.3 .75" />
                  <path d="M20.733 20l1.3 .75" />
                </svg>
                <h2 className="heading-2 w-full font-bold text-dark-900 dark:text-light-50">
                  Habilidades y Herramientas
                </h2>
              </div>
              <p className="paragraph-xl max-w-prose font-medium text-dark-700 dark:text-light-400">
                Soy un apasionado por el aprendizaje continuo. Trabajo a diario
                para perfeccionar mis habilidades, explorar nuevas tecnologías y
                asimilar conceptos innovadores que me permitan crecer como
                profesional y como ser humano.
              </p>
            </div>
            <ToolList />
          </article>
        </div>
      </div>
    </section>
  );
}
