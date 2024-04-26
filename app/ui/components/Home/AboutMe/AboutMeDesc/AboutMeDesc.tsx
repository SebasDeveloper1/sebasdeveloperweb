'use client';
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { RendererProps } from '../AbotMe.model';
import { useInView } from 'react-intersection-observer';
import Loading from './Loading';
import useLoadPage from '@/app/lib/hooks/useLoadPage';

export function AboutMeDesc({ aboutMe }: { aboutMe: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isLoading = useLoadPage();

  const renderers = {
    p: ({ children }: RendererProps) => (
      <p className="paragraph-lg text-dark-50">{children}</p>
    ),
    strong: ({ children }: RendererProps) => (
      <strong className="text-accent3-500 font-semibold">{children}</strong>
    ),
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={ref}
      className={`w-full ${!inView ? 'opacity-0' : 'animate-fade-in-right opacity-100'}`}
    >
      <div className="flex flex-col justify-center items-start gap-4 w-full mb-8">
        <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-pink-400 bg-pink-600 text-pink-200">
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
        <h2 className="w-full max-w-prose heading-3 text-white font-bold">
          Sobre mí
        </h2>
      </div>
      <div className="w-full max-w-prose">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={renderers as Partial<Components>}
        >
          {aboutMe}
        </ReactMarkdown>
      </div>
    </div>
  );
}
