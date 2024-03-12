import Image from 'next/image';
import SDPhoto from '@/public/images/sebastian2.jpg';
import { StarsSVG } from './StarsSVG';

export function Hero(): JSX.Element {
  return (
    <section className="overflow-hidden relative flex justify-center items-center w-full min-h-screen bg-light-950 dark:bg-dark-950">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={
          'https://5wks3vhrfrwwt6gq.public.blob.vercel-storage.com/herobackground-WNgWtEXNFLh8ZJCEWxWeHtsvPi3CEc.mp4'
        }
      />
      <div className="z-10 flex justify-center items-center w-full min-h-screen py-24 bg-dark-950/60 backdrop-blur-[3px]">
        <article className="relative grid grid-cols-1 md:grid-flow-col items-center gap-8 md:gap-10 w-11/12 lg:w-9/12">
          <StarsSVG />
          <figure
            className="z-[12] order-1 md:order-2 overflow-hidden relative w-24 md:w-48 aspect-square rounded-full border-2 border-dark-50"
            style={{
              borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70% ',
            }}
          >
            <Image
              fill
              sizes="100%"
              src={SDPhoto}
              alt={'SebasDeveloper'}
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </figure>
          <div className="z-[12] order-2 md:order-1 flex flex-col justify-center items-start gap-4 w-full">
            <span className="heading-2 text-dark-200 font-bold">Hey, soy</span>
            <h1 className="heading-1 text-dark-50 font-bold">
              Sebastian Pedroza
            </h1>
            <span className="span-xl max-w-prose mt-8 text-dark-300 [&>strong]:text-accent3-500 [&>strong]:font-semibold">
              Ingeniero de Sistemas y Desarrollador Web con
              <strong> +2 años de experiencia.</strong> Especializado en el
              desarrollo de aplicaciones web únicas y de gran impacto.
            </span>
            <button
              type="button"
              className="button-outlined padding-button w-full md:w-fit mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-download"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
              Descargar CV
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
