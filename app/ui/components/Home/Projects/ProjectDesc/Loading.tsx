export default function Loading() {
  return (
    <div className="flex flex-col justify-start gap-4 w-full h-full">
      <div className="flex flex-col justify-center gap-8 w-full">
        <div className="w-14 aspect-square rounded-full bg-light-500/30 dark:bg-dark-400/20 animate-pulse"></div>
        <h2 className="heading-3 w-fit rounded-lg font-bold text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
          Últimos proyectos
        </h2>
      </div>
      <p className="paragraph-lg max-w-prose text-transparent rounded-lg bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
        Me apasiona participar en proyectos que desafíen mis habilidades,
        permitiéndome perfeccionar mis técnicas y brindándome la oportunidad de
        mostrar al mundo mi potencial como profesional.
      </p>
      <div className="w-fit h-9 px-6 mt-3 rounded-full text-sm font-semibold whitespace-nowrap text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
        Ver más
      </div>
    </div>
  );
}
