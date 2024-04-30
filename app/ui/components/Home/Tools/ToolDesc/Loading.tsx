export default function Loading() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full pt-16 md:pt-32 pb-12">
      <article className="flex flex-col justify-center gap-4 w-11/12 lg:w-10/12">
        <div className="flex flex-col justify-center gap-8 w-full">
          <div className="w-14 aspect-square rounded-full bg-light-500/30 dark:bg-dark-400/20 animate-pulse"></div>
          <h2 className="heading-3 w-fit rounded-lg text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
            Habilidades y Herramientas
          </h2>
        </div>
        <p className="paragraph-lg max-w-prose rounded-lg text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
          Soy un apasionado por el aprendizaje continuo. Trabajo a diario para
          perfeccionar mis habilidades, explorar nuevas tecnologías y asimilar
          conceptos innovadores que me permitan crecer como profesional y como
          ser humano.
        </p>
      </article>
    </section>
  );
}
