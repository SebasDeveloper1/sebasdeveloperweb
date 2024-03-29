import { ContactList } from './ContactList';

export function Contact() {
  return (
    <section className="w-full bg-white dark:bg-dark-950">
      <div className="overflow-hidden flex flex-col justify-center items-center w-full">
        <section className="flex flex-col justify-center items-center gap-16 w-11/12 lg:w-10/12 py-16 md:py-32 border-t border-primary-200 dark:border-primary-800">
          <article className="flex flex-col justify-center items-center gap-6 w-full text-center">
            <h2 className="heading-3 font-bold text-light-950 dark:text-dark-50">
              Contacta conmigo
            </h2>
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
