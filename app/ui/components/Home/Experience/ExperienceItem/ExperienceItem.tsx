import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ExperienceItemProps, RendererProps } from './ExperienceItem.model';
import { formatDate } from '@/app/utils/formatDate';

export function ExperienceItem({ experienceData }: ExperienceItemProps) {
  const { jobTitle, type, startDate, endDate, companyName, description, url } =
    experienceData;

  const renderers = {
    p: ({ children }: RendererProps) => (
      <p className="paragraph-base font-medium max-w-prose text-light-600 dark:text-dark-400">
        {children}
      </p>
    ),
    strong: ({ children }: RendererProps) => (
      <strong className="text-light-800 dark:text-dark-50 font-semibold">
        {children}
      </strong>
    ),
  };

  return (
    <div className="flex flex-col items-start gap-4 mb-12 ms-10">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2">
        <div className="col-span-1 flex flex-col items-start">
          <span className="span-xs w-fit mb-2 font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-400/10 rounded-r-full py-0.5 px-3 capitalize">
            {type}
          </span>
          <time className="span-sm font-medium leading-none text-dark-600 dark:text-light-400">
            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
          </time>
          <h3 className="span-xl font-semibold text-yellow-500 dark:text-yellow-400">
            {jobTitle}
          </h3>
          <a
            href={`${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex gap-1 justify-center items-center span-base font-semibold text-dark-700 dark:text-light-300 hover:text-dark-950 dark:hover:text-light-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-link w-5 aspect-square"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 15l6 -6" />
              <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
              <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
            </svg>
            {companyName}
          </a>
        </div>
        <div className="col-span-2 p-4 rounded-xl bg-light-200 dark:bg-dark-800">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={renderers as Partial<Components>}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
