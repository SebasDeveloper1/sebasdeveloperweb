import { PlatziLogo } from '@/app/ui/components/assets/PlatziLogo';
import { UdecLogo } from '@/app/ui/components/assets/UdecLogo';

export function Hero() {
  return (
    <section className="w-full pt-16 bg-dark-950">
      <article className="w-full bg-bgSection1 bg-cover bg-center">
        <div className="flex justify-center items-center w-full py-20">
          <div className="flex flex-col justify-center items-center gap-10 w-11/12 lg:w-10/12">
            <div className="relative flex flex-col justify-center items-center gap-5 lg:gap-8 w-full text-center">
              <h2 className="heading-1 font-bold text-light-50">
                Mi preparación
              </h2>
              <span className="span-2xl font-medium max-w-[50ch] text-dark-400 ">
                Conoce las instituciones que han apoyado mi crecimiento y las
                habilidades que he obtenido en mi paso por ellas.
              </span>
            </div>
            <section className="flex justify-around md:justify-center md:gap-20 items-center place-items-center w-full">
              <a
                href="https://platzi.com/p/SebasDeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlatziLogo className="h-12 md:h-16 text-light-400 hover:text-white transition-all duration-300" />
              </a>
              <a
                href="https://www.ucundinamarca.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UdecLogo className="h-12 md:h-16 text-light-400 hover:text-white transition-all duration-300" />
              </a>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}
