import { fetchAboutMeInfo } from '@/app/lib/api/data/fetch/home';
import { Asset, GetAboutMeInfoQuery } from '@/app/lib/api/generated/graphql';
import { AboutMeImage } from './AboutMeImage';
import { AboutMeDesc } from './AboutMeDesc';

export async function AboutMe(): Promise<JSX.Element> {
  const { personalInformationCollection }: GetAboutMeInfoQuery =
    await fetchAboutMeInfo();
  const { aboutMe, cover } = personalInformationCollection?.items[0] || {};

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
