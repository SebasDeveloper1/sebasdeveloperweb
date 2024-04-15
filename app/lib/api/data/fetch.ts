import { getClient } from '@/lib/client';
import { GetPersonalInfoQuery } from '@/app/lib/api/generated/graphql';
import { GetPersonalInfo } from '../queries/queries';

export const fetchPersonalInfo = async () => {
  try {
    const { data }: { data: GetPersonalInfoQuery } = await getClient().query({
      query: GetPersonalInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching personal info ${error}`);
  }
};
