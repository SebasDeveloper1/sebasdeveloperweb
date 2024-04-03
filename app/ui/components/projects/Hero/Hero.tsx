/* eslint-disable @next/next/no-img-element */
import { StarsSVG } from '@/app/ui/components/assets/StarsSVG';
import Image from 'next/image';
import GHBadge from '@/public/images/badgeGH.png';

export function Hero() {
  return (
    <section className="w-full pt-16 bg-dark-950">
      <article className="w-full bg-bgSection1 bg-cover bg-top">
        <div className="flex justify-center items-center w-full py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 w-11/12 lg:w-10/12">
            <div className="relative flex flex-col justify-center gap-4 lg:gap-8 w-full">
              <StarsSVG />
              <h2 className="heading-1 font-bold text-light-50">
                Mis Proyectos
              </h2>
              <span className="span-xl max-w-prose text-dark-400 ">
                👨‍🚀 Descubre mi trabajo y los proyectos en los que he participado
                y que me han permitido mostrar mis conocimientos y poner a
                prueba mis habilidades. 🚀
              </span>
            </div>
            <section className="w-full">
              <article className="grid place-items-center grid-cols-6 grid-rows-2 gap-4">
                <img
                  src={
                    'https://github-readme-stats.vercel.app/api?username=SebasDeveloper1&show_icons=true&rank_icon=github&locale=es&bg_color=1e293b&hide_border=true&title_color=069bf1&text_color=ffffff'
                  }
                  alt={'SebasDeveloper'}
                  className="col-span-5 w-full"
                />
                <figure className="overflow-hidden relative col-start-6 row-start-1 block w-full aspect-square">
                  <Image
                    fill
                    sizes="100%"
                    src={GHBadge}
                    alt={'SebasDeveloper'}
                    placeholder="blur"
                    className="object-cover object-center"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                  />
                </figure>
                <figure
                  className="overflow-hidden relative col-span-2 col-start-1 row-start-2 block w-2/3 aspect-square"
                  style={{
                    borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70% ',
                  }}
                >
                  <Image
                    fill
                    sizes="100%"
                    src={'https://avatars.githubusercontent.com/u/57186496?v=4'}
                    alt={'SebasDeveloper'}
                    placeholder="blur"
                    className="object-cover object-center"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                  />
                </figure>
                <img
                  src={
                    'https://github-readme-stats.vercel.app/api/top-langs/?username=SebasDeveloper1&show_icons=true&layout=compact&locale=es&bg_color=1e293b&hide_border=true&title_color=069bf1&text_color=ffffff'
                  }
                  alt={'SebasDeveloper'}
                  loading="lazy"
                  className="col-span-4 col-start-3 row-start-2 w-full"
                />
              </article>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}
