import { getClient } from '@/lib/client';
import {
  GetAboutMeInfoQuery,
  GetHeroHomeInfoQuery,
  GetHomeExperienceQuery,
  GetHomeProjectsQuery,
  GetToolListQuery,
} from '@/app/lib/api/generated/graphql';
import {
  GetAboutMeInfo,
  GetHeroHomeInfo,
  GetHomeExperience,
  GetHomeProjects,
  GetToolList,
} from '@/app/lib/api/queries/queries';

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
export const fetchToolList = async () => {
  try {
    const { data }: { data: GetToolListQuery } = await getClient().query({
      query: GetToolList,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching tool list ${error}`);
  }
};
export const fetchHomeProjects = async () => {
  try {
    const { data }: { data: GetHomeProjectsQuery } = await getClient().query({
      query: GetHomeProjects,
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
export const fetchHomeExperience = async () => {
  try {
    const { data }: { data: GetHomeExperienceQuery } = await getClient().query({
      query: GetHomeExperience,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching experience list ${error}`);
  }
};
