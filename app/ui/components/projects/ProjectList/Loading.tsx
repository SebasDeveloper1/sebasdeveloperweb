export default function Loading() {
  return (
    <section className="w-full bg-light-50 dark:bg-dark-900">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-10 w-full py-4 lg:py-16">
          <header className="overflow-hidden w-full lg:w-10/12">
            <ul className="relative overflow-x-auto hide-scrollbar flex flex-nowrap items-center gap-x-7 xl:gap-x-8 w-full p-4 lg:px-0">
              {[...Array(3)].map((_, index) => (
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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 w-11/12 lg:w-10/12">
            {[...Array(8)].map((_, index) => (
              <li
                key={`project_${index}`}
                className="overflow-hidden w-full aspect-[4/3] rounded-xl bg-light-500/30 dark:bg-dark-400/20 animate-pulse"
              >
                <div className="relative overflow-hidden w-full h-full rounded-xl">
                  <section className="absolute inset-0">
                    <article className="flex flex-col justify-end w-full h-full p-2 md:p-3">
                      <span className="span-base md:span-lg w-fit rounded-lg font-semibold text-transparent bg-light-500/30 dark:bg-dark-400/20">
                        DevMovies
                      </span>
                    </article>
                  </section>
                  <span className="absolute top-0 right-0 span-xs md:span-sm w-fit rounded-bl-full px-4 py-0.5 leading-5 font-semibold text-transparent bg-light-500/30 dark:bg-dark-400/20">
                    Avanzado
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
