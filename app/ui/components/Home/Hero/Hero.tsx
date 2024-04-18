import Image from 'next/image';
import ReactMarkdown, { Components } from 'react-markdown';
import { fetchHeroHomeInfo } from '@/app/lib/api/data/fetch/home';
import { StarsSVG } from '@/app/ui/components/assets/StarsSVG';
import { RendererProps } from './Hero.model';
import { GetHeroHomeInfoQuery } from '@/app/lib/api/generated/graphql';

export async function Hero(): Promise<JSX.Element> {
  const { personalInformationCollection }: GetHeroHomeInfoQuery =
    await fetchHeroHomeInfo();

  const { name, shortDescription, photo, cv, bgVideo } =
    personalInformationCollection?.items?.[0] || {};

  const renderers = {
    p: ({ children }: RendererProps) => (
      <p className="span-xl max-w-prose mt-8 text-dark-300">{children}</p>
    ),
    strong: ({ children }: RendererProps) => (
      <strong className="text-accent3-500 font-semibold">{children}</strong>
    ),
  };

  return (
    <section className="overflow-hidden relative flex justify-center items-center w-full min-h-screen bg-light-950 dark:bg-dark-950">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={`${bgVideo?.url}`}
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
              src={`${photo?.url}`}
              alt={`${photo?.title}`}
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </figure>
          <div className="z-[12] order-2 md:order-1 flex flex-col justify-center items-start gap-4 w-full">
            <span className="heading-2 text-dark-200 font-bold">Hey, soy</span>
            <h1 className="heading-1 text-dark-50 font-bold">{name}</h1>
            <ReactMarkdown components={renderers as Partial<Components>}>
              {shortDescription}
            </ReactMarkdown>
            <a
              href={`${cv?.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outlined padding-button w-full md:w-fit mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-download"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
