import { ToolList } from './ToolList';

export function Tools(): JSX.Element {
  return (
    <section className="bg-light-100 dark:bg-dark-950">
      <div className="flex justify-center items-center w-full py-14 bg-bgSection1 bg-cover bg-center">
        <div className="w-11/12 lg:w-10/12 py-8 md:py-16 border-t border-primary-500">
          <article className="flex flex-col justify-center items-center gap-16">
            <div className="flex flex-col justify-center items-center gap-6 w-full text-center">
              <div className="flex flex-col justify-center items-center gap-4 w-full mb-8">
                <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-4 border-indigo-400 bg-indigo-600 text-indigo-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-tool w-4/5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
                  </svg>
                </div>
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
      <div className="overflow-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-light-50 dark:text-dark-900 w-full h-5"
          style={{
            transform: 'rotate(180deg) scaleX(-1)',
          }}
        >
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>
    </section>
  );
}
