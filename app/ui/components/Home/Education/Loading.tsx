export default function Loading() {
  return (
    <section className="w-full bg-white dark:bg-dark-950">
      <div className="overflow-hidden relative flex flex-col justify-center items-center w-full py-16 md:py-32">
        <section className="z-10 flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12">
          <article className="flex flex-col justify-center gap-4 w-full">
            <div className="flex flex-col justify-center gap-8 w-full">
              <div className="w-14 aspect-square rounded-full bg-light-500/30 dark:bg-dark-400/20 animate-pulse"></div>
              <h2 className="heading-3 w-fit rounded-lg font-bold text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                Educación
              </h2>
            </div>
            <p className="paragraph-lg max-w-prose rounded-lg text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
              Soy Ingeniero de Sistemas, egresado de la Universidad de
              Cundinamarca y estudiante permanente de Platzi en temas
              relacionados con Desarrollo e Ingeniería, Habilidades blandas,
              Inglés y mucho más.
            </p>
            <div className="w-fit h-9 px-6 mt-3 rounded-full text-sm font-semibold whitespace-nowrap text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
              Ver más
            </div>
          </article>
          <ul className="flex justify-evenly items-center gap-8 place-items-center w-11/12 md:w-full">
            <li className="w-2/5 md:w-1/4 aspect-video rounded-lg bg-light-500/30 dark:bg-dark-400/20 animate-pulse"></li>
            <li className="w-2/5 md:w-1/4 aspect-video rounded-lg bg-light-500/30 dark:bg-dark-400/20 animate-pulse"></li>
          </ul>
        </section>
      </div>
    </section>
  );
}
