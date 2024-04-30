const getConditionalClasses = (index: number) => {
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

export default function Loading() {
  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="overflow-hidden w-full h-full grid grid-cols-3 grid-rows-2 gap-4">
        {/* Skeleton Loading */}
        {[...Array(6)].map((_, index) => (
          <li
            key={index}
            className={`w-full h-full rounded-xl ${getConditionalClasses(index)} bg-light-500/30 dark:bg-dark-400/20 animate-pulse`}
          ></li>
        ))}
      </ul>
    </section>
  );
}
