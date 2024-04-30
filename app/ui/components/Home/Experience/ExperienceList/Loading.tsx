export default function Loading() {
  return (
    <ol className="relative w-11/12">
      {/* Skeleton Loading */}
      {[...Array(2)].map((_, index) => (
        <li key={index} className="w-full h-full rounded-xl animate-pulse">
          <div className="w-full">
            <div className="absolute w-8 aspect-square rounded-full mt-8 -left-4 bg-light-500/30 dark:bg-dark-400/20 animate-pulse"></div>
            <div className="flex flex-col items-start gap-4 mb-12 ml-10">
              <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2">
                <div className="col-span-1 flex flex-col items-start">
                  <span className="text-xs whitespace-nowrap mb-2 font-medium text-transparent rounded-r-full py-0.5 px-3 bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                    Freelance
                  </span>
                  <time className="whitespace-nowrap mb-2 rounded-lg text-sm font-medium leading-none text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                    Noviembre 2023 - Febrero 2024
                  </time>
                  <h3 className="whitespace-nowrap mb-2 rounded-lg text-xl font-semibold text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                    Frontend Developer
                  </h3>
                  <div className="whitespace-nowrap px-3 rounded-lg text-base font-semibold text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                    Cinergia Perú
                  </div>
                </div>
                <div className="col-span-2 w-full rounded-xl paragraph-base font-medium text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                  Como desarrollador frontend en Cinergia, lideré el desarrollo
                  Frontend del sitio web Cinergia.lat, contribuyendo al diseño
                  UI/UX y utilizando tecnologías de vanguardia como Next-JS,
                  ReactJS, TypeScript y Tailwind CSS. Gestioné el proyecto con
                  Git y GitHub, resultando en una plataforma web de alta calidad
                  y satisfaciendo las necesidades de los usuarios. Esta
                  experiencia demuestra mi capacidad para liderar proyectos web
                  exitosos y trabajar eficazmente en equipo.
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
