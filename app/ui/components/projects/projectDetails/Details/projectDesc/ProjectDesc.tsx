export function ProjectDesc() {
  return (
    <div className="w-full lg:w-10/12 flex flex-col">
      <h1 className="w-full max-w-prose mb-6 heading-2 font-bold text-light-950 dark:text-dark-50">
        SariamParty
      </h1>
      <div className="flex items-center gap-2 w-full mb-6 capitalize">
        <span className="span-sm w-fit leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3">
          Proyecto personal
        </span>
        <span className="span-sm w-fit leading-5 font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-400/10 rounded-full py-1 px-3">
          Web
        </span>
        <span className="span-sm w-fit leading-5 font-medium text-pink-600 dark:text-pink-400 bg-pink-400/10 rounded-full py-1 px-3">
          Avanzado
        </span>
      </div>
      <p className="paragraph-lg max-w-prose mb-7 text-dark-700 dark:text-light-400 [&>strong]:text-accent3-500 [&>strong]:font-semibold">
        🥳 Este proyecto consiste en una página informativa diseñada
        especialmente para la empresa Sariam Party, que se dedica a la logística
        y organización de eventos sociales y empresariales. En esta página, la
        empresa puede destacar sus servicios, compartir las opiniones de sus
        clientes y proporcionar información de contacto. Además, se ha
        incorporado Contentful como un sistema de gestión de contenido (CMS)
        para que los propietarios de la empresa puedan administrar fácilmente el
        contenido de la página.
      </p>
      <h2 className="w-full max-w-prose mb-3 heading-3 font-bold text-light-950 dark:text-dark-50">
        Tecnologias
      </h2>
      <span className="span-lg max-w-prose mb-8 text-dark-800 dark:text-light-300 capitalize">
        Html, Css, JavaScript, TypeScript, React JS, Next JS, Tailwind CSS, Git,
        Github, Netlify, Contentful, GraphQL.
      </span>

      <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        <button
          type="button"
          className="button-primary padding-button w-full md:w-fit"
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
          Ver en la web
        </button>
        <button
          type="button"
          className="button-outlined padding-button w-full md:w-fit"
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
          Ver código
        </button>
      </div>
    </div>
  );
}
