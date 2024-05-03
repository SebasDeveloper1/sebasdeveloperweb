/**
 * Function to determine conditional classes based on index.
 * @param {number} index - Index of the element.
 * @returns {string} - Conditional classes based on index.
 */
const getConditionalClasses = (index: number): string => {
  switch (index) {
    case 0:
      return 'aspect-square';
    case 1:
      return 'col-span-2 col-start-2 row-start-1';
    case 2:
      return 'col-start-1 row-start-2';
    case 3:
      return 'col-start-2 row-start-2';
    case 4:
      return 'col-start-3 row-start-2';
    default:
      return '';
  }
};

/**
 * Represents a loading skeleton for displaying placeholder content.
 * @returns {JSX.Element} - JSX element representing the loading skeleton.
 */
export default function Loading(): JSX.Element {
  // Render the loading skeleton
  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="overflow-hidden w-full h-full grid grid-cols-3 grid-rows-2 gap-4">
        {/* Skeleton Loading */}
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className={`overflow-hidden w-full h-full rounded-xl ${getConditionalClasses(index)} bg-light-500/30 dark:bg-dark-400/20 animate-pulse`}
          >
            <div className="relative w-full h-full">
              <article className="flex flex-col justify-end w-full h-full p-2 md:p-3">
                <span className="span-base md:span-lg w-fit rounded-lg font-semibold text-transparent bg-light-500/30 dark:bg-dark-400/20">
                  DevMovies
                </span>
              </article>
              <span className="absolute top-0 right-0 span-xs md:span-sm w-fit rounded-bl-full px-4 py-0.5 leading-5 font-semibold text-transparent bg-light-500/30 dark:bg-dark-400/20">
                Avanzado
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
