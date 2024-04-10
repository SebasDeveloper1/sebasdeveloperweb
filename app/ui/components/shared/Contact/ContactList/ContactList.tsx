import { ContactCard } from '../ContactCard';

export function ContactList() {
  return (
    <section className="flex flex-col justify-center items-center gap-16 w-full">
      <ul className="overflow-hidden w-full h-full rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index} className="overflow-hidden">
            <ContactCard />
          </li>
        ))}
      </ul>
    </section>
  );
}
