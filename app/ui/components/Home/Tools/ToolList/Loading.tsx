export default function Loading() {
  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-5 w-full">
        {[...Array(6)].map((_, index) => (
          <li
            key={index}
            className="w-full min-h-[6.5rem] h-full rounded-xl bg-light-500/30 dark:bg-dark-400/20 animate-pulse"
          ></li>
        ))}
      </ul>
      <div className="w-full md:w-fit padding-button px-12 rounded-lg text-transparent bg-light-500/30 dark:bg-dark-400/20 animate-pulse">
        Ver más
      </div>
    </section>
  );
}
