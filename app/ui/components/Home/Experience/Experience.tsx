export function Experience() {
  return (
    <section className="bg-light-50 dark:bg-primary-950/10">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12 py-16">
          <div className="flex flex-col justify-center items-center gap-16 w-full">
            <div className="flex flex-col justify-center gap-8 w-full">
              <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-yellow-400 bg-yellow-600 text-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-4/5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <h2 className="heading-3 w-full font-bold text-dark-900 dark:text-light-50">
                Experiencia laboral
              </h2>
            </div>
            <ol className="relative w-11/12 border-s border-dark-400 dark:border-light-700">
              <li className="flex flex-col items-start gap-4 mb-12 ms-10">
                <div className="absolute w-8 aspect-square rounded-full mt-4 p-1 -start-4 text-yellow-200 dark:text-yellow-200 border-2 border-yellow-400 dark:border-yellow-400  bg-yellow-600 dark:bg-yellow-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-full"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 12l0 .01" />
                    <path d="M3 13a20 20 0 0 0 18 0" />
                  </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2">
                  <div className="col-span-1 flex flex-col items-start">
                    <time className="span-sm font-medium leading-none text-dark-600 dark:text-light-400">
                      Noviembre 2023 - Marzo 2024
                    </time>
                    <h3 className="span-xl font-semibold text-yellow-500 dark:text-yellow-400">
                      Frontend Developer
                    </h3>
                    <a
                      href="/"
                      className="span-lg font-semibold text-dark-800 dark:text-light-200 hover:text-dark-950 dark:hover:text-light-50"
                    >
                      Cinergia Perú
                    </a>
                  </div>
                  <p className="col-span-2 p-4 rounded-lg rounded-tl-none paragraph-blg font-medium max-w-prose text-dark-600 dark:text-light-400 bg-dark-200/60 dark:bg-slate-900/70">
                    Responsable de la plataforma, componentes y utilidades para
                    la creación y desarrollo de aplicaciones web. Mejora de un
                    30% en la entrega de software. Implantación de medidas de
                    integración continua y despliegue con A/B testing en más de
                    15 equipos.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-start gap-4 mb-12 ms-10">
                <div className="absolute w-8 aspect-square rounded-full mt-4 p-1 -start-4 text-yellow-200 dark:text-yellow-200 border-2 border-yellow-400 dark:border-yellow-400  bg-yellow-600 dark:bg-yellow-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-full"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 12l0 .01" />
                    <path d="M3 13a20 20 0 0 0 18 0" />
                  </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2">
                  <div className="col-span-1 flex flex-col items-start">
                    <time className="span-sm font-medium leading-none text-dark-600 dark:text-light-400">
                      Noviembre 2023 - Marzo 2024
                    </time>
                    <h3 className="span-xl font-semibold text-yellow-500 dark:text-yellow-400">
                      Frontend Developer
                    </h3>
                    <a
                      href="/"
                      className="span-lg font-semibold text-dark-800 dark:text-light-200 hover:text-dark-950 dark:hover:text-light-50"
                    >
                      Cinergia Perú
                    </a>
                  </div>
                  <p className="col-span-2 p-4 rounded-lg paragraph-blg font-medium max-w-prose text-dark-600 dark:text-light-400 bg-dark-200/60 dark:bg-slate-900/70">
                    Responsable de la plataforma, componentes y utilidades para
                    la creación y desarrollo de aplicaciones web. Mejora de un
                    30% en la entrega de software. Implantación de medidas de
                    integración continua y despliegue con A/B testing en más de
                    15 equipos.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}
