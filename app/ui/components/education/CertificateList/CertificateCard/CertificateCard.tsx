export function CertificateCard() {
  return (
    <a
      href="/"
      className="overflow-hidden group flex justify-center items-center gap-4 w-full h-full p-4 rounded-xl bg-light-100 hover:bg-dark-200/70 dark:bg-dark-900/30 dark:hover:bg-dark-900 shadow-sm"
    >
      <figure className="relative w-20 aspect-square">
        <img
          src={
            'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/next-defe9ba8-b678-4934-a898-7be2188cdbac.png'
          }
          alt={'SebasDeveloper'}
          loading="lazy"
          className="absolute inset-0"
        />
      </figure>
      <div className="flex flex-col justify-center gap-2 w-full h-full">
        <span className="w-full span-sm font-medium leading-5 line-clamp-2 text-dark-900 dark:text-light-200">
          Curso de Next.js: Optimización y Manejo de Grandes Datasets
        </span>
        <span className="span-xs font-semibold leading-none text-primary-600 dark:text-primary-400">
          Platzi | 2024
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right w-6 text-light-400 dark:text-dark-600 group-hover:text-primary-500 dark:group-hover:text-primary-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </a>
  );
}
