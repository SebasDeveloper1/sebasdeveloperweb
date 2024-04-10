import { ContactList } from '@/app/ui/components/shared/Contact/ContactList';

export function Hero() {
  return (
    <section className="w-full min-h-screen pt-16 bg-white dark:bg-dark-950 dark:border-dark-950">
      <div className="flex justify-center items-center w-full min-h-screen bg-section_1 bg-cover bg-center">
        <section className="flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12 py-16">
          <article className="flex flex-col justify-center items-center gap-4 w-full text-center">
            <h1 className="heading-3 font-bold text-light-950 dark:text-dark-50">
              Contacta conmigo
            </h1>
            <span className="heading-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              @SebasDeveloper
            </span>
            <span className="span-xl font-semibold text-light-600 dark:text-dark-400">
              ¿Quieres trabajar conmigo? ¡Hazme un ping!
            </span>
          </article>
          <article className="w-full">
            <ContactList />
          </article>
        </section>
      </div>
    </section>
  );
}
