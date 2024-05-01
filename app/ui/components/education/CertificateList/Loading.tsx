export default function Loading() {
  return (
    <section className="w-full bg-white dark:bg-dark-950">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-10 w-full py-4 lg:py-16">
          <header className="overflow-hidden w-full lg:w-10/12">
            <ul className="relative overflow-x-auto hide-scrollbar flex flex-nowrap items-center gap-x-7 xl:gap-x-8 w-full p-4 lg:px-0">
              {[...Array(8)].map((_, index) => (
                <li
                  key={`item-${index}`}
                  className="flex flex-col gap-2 w-16 animate-pulse"
                >
                  <div className="w-full aspect-square rounded-lg bg-light-500/30 dark:bg-dark-400/20"></div>
                  <div className="w-full h-4 rounded-full bg-light-500/30 dark:bg-dark-400/20"></div>
                </li>
              ))}
            </ul>
          </header>
          <section className="flex flex-col justify-center gap-8 w-11/12 lg:w-10/12">
            <span className="flex justify-center items-center flex-nowrap gap-3 w-fit animate-pulse">
              <h2 className="heading-5 font-medium text-transparent rounded-full bg-light-500/30 dark:bg-dark-400/20">
                Todas las certificaciones
              </h2>
              <span className="w-fit whitespace-nowrap heading-5 font-medium text-transparent rounded-full bg-light-500/30 dark:bg-dark-400/20 px-3">
                124
              </span>
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full">
              {[...Array(9)].map((_, index) => (
                <li key={`Certidicate_${index}`} className="w-full h-full">
                  <div className="overflow-hidden group flex justify-center items-center gap-4 w-full h-full p-4 rounded-xl bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
                    <figure className="relative w-20 aspect-square rounded-full bg-light-500/30 dark:bg-dark-400/20"></figure>
                    <div className="flex flex-col justify-center gap-2 w-full h-full">
                      <span className="w-fit rounded-lg span-sm font-medium leading-5 line-clamp-2 text-transparent bg-light-500/30 dark:bg-dark-400/20">
                        Curso de Next.js de Platzi
                      </span>
                      <span className="w-fit px-3 rounded-lg span-sm font-semibold leading-none text-transparent bg-light-500/30 dark:bg-dark-400/20">
                        Platzi
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
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
