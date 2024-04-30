export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      <div className="flex flex-col justify-center items-start gap-4 w-full mb-8">
        <div className="w-14 aspect-square rounded-full bg-light-50/20 animate-pulse"></div>
        <h2 className="w-fit rounded-lg heading-3 text-transparent bg-light-50/20">
          Sobre mí
        </h2>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-prose">
        <p className="w-fit rounded-lg paragraph-lg text-transparent bg-light-50/20 animate-pulse">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          mattis tellus, eget euismod velit. Donec quis diam ligula.
        </p>
        <p className="w-fit rounded-lg paragraph-lg text-transparent bg-light-50/20 animate-pulse">
          Aliquam eu fringilla turpis. Mauris venenatis tellus sit amet justo
          varius, vitae fermentum ante placerat.
        </p>
        <p className="w-fit rounded-lg paragraph-lg text-transparent bg-light-50/20 animate-pulse">
          Aliquam eu fringilla turpis.
        </p>
      </div>
    </div>
  );
}
