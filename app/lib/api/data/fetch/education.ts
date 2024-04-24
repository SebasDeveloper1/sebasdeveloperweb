import { GetCertificateList } from '@/app/lib/api/queries/queries';
import { GetCertificateListQuery } from '@/app/lib/api/generated/graphql';
import { getClient } from '@/lib/client';

export const fetchCertificateList = async () => {
  try {
    const { data }: { data: GetCertificateListQuery } = await getClient().query(
      {
        query: GetCertificateList,
        context: {
          fetchOptions: {
            next: { revalidate: 5 },
          },
        },
      },
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching certificate list ${error}`);
  }
};
