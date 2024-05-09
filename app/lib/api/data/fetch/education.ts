import { getClient } from '@/lib/client';
import { GetCertificateList } from '@/app/lib/api/queries/queries';
import { GetCertificateListQuery } from '@/app/lib/api/generated/graphql';

/**
 * Function to fetch the list of certificates.
 * @returns The list of certificates.
 * @throws Error if there's a problem fetching the list.
 */
export const fetchCertificateList = async () => {
  try {
    // Making a request to fetch the list of certificates
    const { data }: { data: GetCertificateListQuery } = await getClient().query(
      {
        query: GetCertificateList,
        context: {
          fetchOptions: {
            next: { revalidate: 3600 }, // Options for cache revalidation
          },
        },
      },
    );
    // Returning the obtained data
    return data;
  } catch (error) {
    // Throwing an error if there's any issue fetching the list of certificates
    throw new Error(`Error fetching certificate list ${error}`);
  }
};
