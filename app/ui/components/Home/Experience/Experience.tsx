export function Experience() {
  return (
    <section className="bg-light-100 dark:bg-dark-950">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12 py-16 md:py-32">
          <div className="flex flex-col justify-center gap-4 w-full">
            <div className="flex flex-col justify-center gap-8 w-full">
              <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-slate-400 bg-slate-600 text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-4/5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <h2 className="heading-3 w-full font-bold text-dark-900 dark:text-light-50">
                Experiencia laboral
              </h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
