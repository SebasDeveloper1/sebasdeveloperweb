import { PlatziLogo } from '@/app/ui/components/assets/PlatziLogo';
import { UdecLogo } from '@/app/ui/components/assets/UdecLogo';

export function Hero() {
  return (
    <section className="overflow-hidden w-full min-h-[50vh] pt-16">
      <article className="w-full min-h-[50vh] bg-blurCyan bg-cover bg-top">
        <div className="flex justify-center items-center w-full min-h-[50vh] py-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-11/12 lg:w-10/12">
            <div className="relative flex flex-col justify-center items-start gap-5 lg:gap-8 w-full">
              <h1 className="heading-1 lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500">
                Mi preparación
              </h1>
              <p className="paragraph-xl max-w-[50ch] font-medium text-light-500 dark:text-dark-300">
                🎓 Conoce las instituciones que han apoyado mi crecimiento y las
                habilidades que he obtenido en mi paso por ellas.
              </p>
            </div>
            <section className="grid place-items-center grid-cols-6 grid-rows-2 gap-8 w-full">
              <a
                href="https://platzi.com/p/SebasDeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-1 col-end-5"
              >
                <PlatziLogo className="h-16 md:h-24 text-light-600 dark:text-light-300 hover:text-dark-950 dark:hover:text-dark-50 transition-all duration-300" />
              </a>
              <a
                href="https://www.ucundinamarca.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-3 col-end-7"
              >
                <UdecLogo className="h-16 md:h-24 text-light-600 dark:text-light-300 hover:text-dark-950 dark:hover:text-dark-50 transition-all duration-300" />
              </a>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}
