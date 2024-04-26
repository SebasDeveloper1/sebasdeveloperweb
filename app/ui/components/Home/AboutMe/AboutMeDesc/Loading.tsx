export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      <div className="flex flex-col justify-center items-start gap-4 w-full mb-8">
        <div className="flex justify-center items-center w-14 aspect-square p-1 rounded-full border-[3px] border-pink-400 bg-pink-600 text-pink-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user-code w-4/5"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
            <path d="M20 21l2 -2l-2 -2" />
            <path d="M17 17l-2 2l2 2" />
          </svg>
        </div>
        <h2 className="w-fit rounded-lg heading-3 text-transparent bg-light-50/20">
          Loading...
        </h2>
      </div>
      <div className=" flex flex-col gap-4 w-full max-w-prose">
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
