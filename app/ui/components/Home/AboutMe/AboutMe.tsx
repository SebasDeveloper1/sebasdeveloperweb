// API and GraphQL imports
import { fetchAboutMeInfo } from '@/app/lib/api/data/fetch/home'; // Function to fetch about me information
import { Asset, GetAboutMeInfoQuery } from '@/app/lib/api/generated/graphql'; // GraphQL types and queries for about me

// Component imports
import { AboutMeImage } from './AboutMeImage'; // Component for the about me image
import { AboutMeDesc } from './AboutMeDesc'; // Component for the about me description

/**
 * Asynchronously fetches personal information and renders the "About Me" section.
 * @returns {Promise<JSX.Element>} - JSX element representing the "About Me" section.
 */
export async function AboutMe(): Promise<JSX.Element> {
  // Fetch personal information
  const { personalInformationCollection }: GetAboutMeInfoQuery =
    await fetchAboutMeInfo();
  const { aboutMe, cover } = personalInformationCollection?.items[0] || {};

  // Render the "About Me" section
  return (
    <section className="flex justify-center items-center w-full py-16 md:py-32 gradient-primary">
      <article className="grid grid-cols-1 md:grid-flow-col place-items-center gap-8 w-11/12 lg:w-10/12">
        <AboutMeImage cover={cover as Asset} />
        <section className="order-2 md:order-1 w-full">
          <AboutMeDesc aboutMe={aboutMe as string} />
        </section>
      </article>
    </section>
  );
}
