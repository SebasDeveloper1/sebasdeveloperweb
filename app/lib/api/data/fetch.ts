import { getClient } from '@/lib/client';
import {
  GetAboutMeInfoQuery,
  GetHeroHomeInfoQuery,
  GetNavbarInfoQuery,
} from '@/app/lib/api/generated/graphql';
import {
  GetAboutMeInfo,
  GetHeroHomeInfo,
  GetNavbarInfo,
} from '../queries/queries';

export const fetchNavbarInfo = async () => {
  try {
    const { data }: { data: GetNavbarInfoQuery } = await getClient().query({
      query: GetNavbarInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching navbar personal info ${error}`);
  }
};

export const fetchHeroHomeInfo = async () => {
  try {
    const { data }: { data: GetHeroHomeInfoQuery } = await getClient().query({
      query: GetHeroHomeInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching hero personal info ${error}`);
  }
};
export const fetchAboutMeInfo = async () => {
  try {
    const { data }: { data: GetAboutMeInfoQuery } = await getClient().query({
      query: GetAboutMeInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching about me personal info ${error}`);
  }
};
