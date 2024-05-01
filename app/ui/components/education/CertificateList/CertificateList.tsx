'use client';
import { useEffect, useState } from 'react';
import { Certification } from '@/app/lib/api/generated/graphql';
import { CertificateCard } from './CertificateCard';
import { CertificateListProps, NavbarItems } from './CertificateList.model';
import { navbarItems } from './NavbarItems';
import useLoadPage from '@/app/lib/hooks/useLoadPage';
import Loading from './Loading';

const initialCount = 9;

export function CertificateList({
  certificationCollection,
}: CertificateListProps) {
  const { items } = certificationCollection;
  const [filteredCertification, setFilteredCertification] = useState<
    Certification[]
  >(items as Certification[]);
  const [activeItem, setActiveItem] = useState<NavbarItems>(navbarItems[0]);
  const [visibleItems, setVisibleItems] = useState<number>(initialCount); // Número de elementos a mostrar inicialmente

  /**
   * Handle scroll event to load more items when reaching the bottom of the page.
   */
  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolledToBottom =
        document.documentElement.offsetHeight -
          (window.innerHeight + document.documentElement.scrollTop) <=
        200;

      if (!isScrolledToBottom) return;

      // Calculate the new number of visible items
      const newVisibleItems = Math.min(
        filteredCertification.length,
        visibleItems + initialCount,
      );

      // Update the visible items count
      setVisibleItems(newVisibleItems);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filteredCertification, visibleItems]);

  /**
   * Handle menu item click event.
   *
   * Updates the visible items based on the selected menu item.
   *
   * @param {NavbarItems} item - The selected menu item.
   */
  const handleMenuClick = ({ item }: { item: NavbarItems }): void => {
    // Filter certifications based on the selected menu item
    const updatedCertification: Certification[] =
      item.name === 'all'
        ? (items as Certification[])
        : (items.filter(
            (certificate) => certificate?.category === item?.name,
          ) as Certification[]);

    // Determine the number of visible items
    const visibleItemCount = Math.min(
      updatedCertification.length,
      initialCount,
    );

    // Update the visible items count
    setVisibleItems(visibleItemCount);

    // Set the filtered certifications
    setFilteredCertification(updatedCertification);

    // Set the active menu item
    setActiveItem(item);
  };

  const isLoading = useLoadPage();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-full bg-white dark:bg-dark-950">
      <div className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center gap-10 w-full py-4 lg:py-16">
          <header className="overflow-hidden w-full lg:w-10/12 ">
            <ul className="relative overflow-x-auto hide-scrollbar flex flex-nowrap items-center gap-x-7 xl:gap-x-8 w-full p-4 lg:px-0">
              {navbarItems.map((item) => (
                <li key={`item-${item?.name}`}>
                  <button
                    type="button"
                    className={`group w-full flex flex-col items-center gap-4 span-sm font-semibold capitalize whitespace-nowrap text-light-500 hover:text-light-700 dark:text-dark-400 hover:dark:text-dark-200 ${activeItem?.name === item?.name ? 'text-primary-500 dark:text-primary-500' : ''}`}
                    onClick={() => handleMenuClick({ item })}
                  >
                    {item?.icon}
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>
          </header>
          <section className="flex flex-col justify-center gap-8 w-11/12 lg:w-10/12">
            <span className="flex justify-center items-center flex-nowrap gap-3 w-fit">
              <h2 className="heading-5 font-medium text-light-800 dark:text-dark-100 normal-case">
                {activeItem?.subtitle}
              </h2>
              <span className="w-fit whitespace-nowrap font-medium text-accent2-50 dark:text-accent2-50 bg-accent2-500 rounded-full py-0.5 px-3">
                {filteredCertification?.length}
              </span>
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full">
              {filteredCertification
                .slice(0, visibleItems)
                .map((certificate) => (
                  <li
                    key={`Certidicate_${certificate?.url}`}
                    className="w-full h-full"
                  >
                    <CertificateCard
                      certificateData={certificate as Certification}
                    />
                  </li>
                ))}
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
