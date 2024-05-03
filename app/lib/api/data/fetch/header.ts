import { getClient } from '@/lib/client';
import { GetNavbarInfoQuery } from '@/app/lib/api/generated/graphql';
import { GetNavbarInfo } from '@/app/lib/api/queries/queries';

/**
 * Fetches navbar information asynchronously.
 * @returns {Promise<GetNavbarInfoQuery>} A promise resolving to the fetched navbar information.
 * @throws {Error} If there's an error while fetching the navbar information.
 */
export const fetchNavbarInfo = async () => {
  try {
    // Fetch navbar information using GraphQL query
    const { data }: { data: GetNavbarInfoQuery } = await getClient().query({
      query: GetNavbarInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 86400 }, // Options for cache revalidation
        },
      },
    });
    return data; // Return the fetched navbar information
  } catch (error) {
    // Throw an error if there's an issue while fetching the navbar information
    throw new Error(`Error fetching navbar personal info ${error}`);
  }
};
