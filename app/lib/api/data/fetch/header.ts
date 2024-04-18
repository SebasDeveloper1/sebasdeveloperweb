import { getClient } from '@/lib/client';
import { GetNavbarInfoQuery } from '@/app/lib/api/generated/graphql';
import { GetNavbarInfo } from '@/app/lib/api/queries/queries';

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
