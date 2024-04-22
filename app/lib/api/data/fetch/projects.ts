import {
  GetProjectDetailsQuery,
  GetProjectsListQuery,
} from '@/app/lib/api/generated/graphql';
import {
  GetProjectDetails,
  GetProjectsList,
} from '@/app/lib/api/queries/queries';
import { getClient } from '@/lib/client';

export const fetchProjectList = async () => {
  try {
    const { data }: { data: GetProjectsListQuery } = await getClient().query({
      query: GetProjectsList,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching project list ${error}`);
  }
};
export const fetchProjectDetails = async ({ slug }: { slug: string }) => {
  try {
    const { data }: { data: GetProjectDetailsQuery } = await getClient().query({
      query: GetProjectDetails({ slug: slug }),
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching project list ${error}`);
  }
};
