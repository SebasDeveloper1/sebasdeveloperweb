import Image from 'next/image';
import SDAboutMe from '@/public/images/aboutme.jpg';

export function AboutMe(): JSX.Element {
  return (
    <section className="flex justify-center items-center w-full py-20 gradient-primary">
      <article className="grid grid-cols-1 md:grid-flow-col place-items-center gap-8 w-11/12 lg:w-10/12">
        <figure
          className="z-[12] order-1 md:order-2 overflow-hidden relative w-8/12 md:w-80 aspect-square rounded-full drop-shadow-xl"
          style={{
            borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70% ',
          }}
        >
          <Image
            fill
            sizes="100%"
            src={SDAboutMe}
            alt={'SebasDeveloper'}
            placeholder="blur"
            loading="lazy"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
        <section className="order-2 md:order-1 w-full">
          <div className="flex flex-col justify-center items-start gap-4 w-full mb-8">
            <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-4 border-pink-400 bg-pink-600 text-pink-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-code w-4/5"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                <path d="M20 21l2 -2l-2 -2" />
                <path d="M17 17l-2 2l2 2" />
              </svg>
            </div>
            <h2 className="w-full max-w-prose heading-2 text-white font-bold">
              Sobre mí
            </h2>
          </div>
          <div className="w-full max-w-prose">
            <p className="mb-6 paragraph-lg text-dark-100">
              👋 ¡Hola! Soy Sebastián, un apasionado de la tecnología con un
              espíritu creativo, innovador y curioso. Busco colaborar de forma
              efectiva en el desarrollo personal y profesional de las personas
              con las que trabajo y en la elaboración de productos y servicios
              tecnológicos de alta calidad que aporten un valor agregado al
              mundo y que impacten de forma positiva en la vida de sus usuarios.
            </p>
            <span className="span-lg text-dark-50 [&>strong]:text-accent3-500 [&>strong]:font-semibold">
              ¡Si compartes mi visión y te entusiasma la idea de crear algo
              increíble, no dudes en ponerte en contacto conmigo! Estoy listo
              para formar parte de tu proyecto y juntos hacer historia.
              <strong> ¡Espero con ansias tu mensaje!</strong> 🚀
            </span>
          </div>
        </section>
      </article>
    </section>
  );
}
