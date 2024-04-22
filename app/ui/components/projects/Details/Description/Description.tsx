import ReactMarkdown, { Components } from 'react-markdown';
import { DescriptionProps, RendererProps } from './Description.model';
import rehypeRaw from 'rehype-raw';

export function Description({ projectData }: DescriptionProps) {
  const {
    name,
    type,
    category,
    level,
    device,
    description,
    tools,
    linkView,
    linkRepo,
  } = projectData;

  const toolsArray = tools?.split(', ');

  const renderers = {
    p: ({ children }: RendererProps) => (
      <p className="paragraph-lg max-w-prose text-dark-700 dark:text-light-400">
        {children}
      </p>
    ),
    strong: ({ children }: RendererProps) => (
      <strong className="text-yellow-500 dark:text-yellow-400 font-semibold">
        {children}
      </strong>
    ),
  };

  return (
    <div className="w-full lg:w-10/12 flex flex-col gap-6">
      <h1 className="w-full max-w-prose heading-2 font-bold text-light-950 dark:text-dark-50">
        {name}
      </h1>
      <div className="flex flex-wrap items-center gap-2 w-full capitalize">
        <span className="span-sm w-fit leading-5 whitespace-nowrap font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3">
          {type}
        </span>
        <span className="span-sm w-fit leading-5 whitespace-nowrap font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-400/10 rounded-full py-1 px-3">
          {category}
        </span>
        <span className="span-sm w-fit leading-5 whitespace-nowrap font-medium text-pink-600 dark:text-pink-400 bg-pink-400/10 rounded-full py-1 px-3">
          {level}
        </span>
        <span className="span-sm w-fit leading-5 whitespace-nowrap font-medium text-green-600 dark:text-green-400 bg-green-400/10 rounded-full py-1 px-3">
          {device}
        </span>
      </div>
      <div className="w-full mb-2">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={renderers as Partial<Components>}
        >
          {description}
        </ReactMarkdown>
      </div>
      <h2 className="flex items-center gap-2 w-full max-w-prose heading-4 font-bold text-light-950 dark:text-dark-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-augmented-reality-2 w-8 aspect-square"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
          <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
          <path d="M13 14.5v4.5l4 2.5" />
          <path d="M17 17l4 -2.5" />
          <path d="M11 4h2" />
        </svg>
        Tecnologias
      </h2>
      <div className="flex flex-wrap items-center gap-2 w-full mb-3 capitalize">
        {toolsArray?.map((tool) => (
          <span
            key={`tool_${tool}`}
            className="span-sm w-fit leading-5 whitespace-nowrap font-medium text-dark-600 dark:text-dark-400 bg-dark-500/5 rounded-full py-1 px-3"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        <a
          href={`${linkView}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary padding-button w-full md:w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-devices"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
            <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
            <path d="M16 9h2" />
          </svg>
          Ver en la web
        </a>
        {linkRepo ? (
          <a
            href={`${linkRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-outlined padding-button w-full md:w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            Ver código
          </a>
        ) : null}
      </div>
    </div>
  );
}
