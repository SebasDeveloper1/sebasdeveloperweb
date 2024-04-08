import { PlatziLogo } from '@/app/ui/components/assets/PlatziLogo';
import { UdecLogo } from '@/app/ui/components/assets/UdecLogo';

export function Hero() {
  return (
    <section className="w-full pt-16 bg-primary-50 dark:bg-dark-900/40">
      <article className="w-full">
        <div className="flex justify-center items-center w-full py-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-11/12 lg:w-10/12">
            <div className="relative flex flex-col justify-center items-start gap-5 lg:gap-8 w-full">
              <h1 className="heading-1 lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">
                Mi preparación
              </h1>
              <span className="span-xl max-w-[50ch] font-medium text-light-500 dark:text-dark-400">
                🎓 Conoce las instituciones que han apoyado mi crecimiento y las
                habilidades que he obtenido en mi paso por ellas.
              </span>
            </div>
            <section className="flex justify-around md:justify-center md:gap-20 items-center place-items-center w-full">
              <a
                href="https://platzi.com/p/SebasDeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlatziLogo className="h-14 md:h-20 text-light-600 dark:text-light-400 hover:text-dark-950 dark:hover:text-dark-50 transition-all duration-300" />
              </a>
              <a
                href="https://www.ucundinamarca.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UdecLogo className="h-14 md:h-20 text-light-600 dark:text-light-400 hover:text-dark-950 dark:hover:text-dark-50 transition-all duration-300" />
              </a>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}
