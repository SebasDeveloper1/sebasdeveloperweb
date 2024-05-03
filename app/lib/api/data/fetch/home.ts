import { getClient } from '@/lib/client'; // Importing the getClient function to retrieve the GraphQL client

import {
  GetAboutMeInfoQuery,
  GetHeroHomeInfoQuery,
  GetHomeExperienceQuery,
  GetHomeProjectsQuery,
  GetToolListQuery,
} from '@/app/lib/api/generated/graphql'; // Importing GraphQL query types

import {
  GetAboutMeInfo,
  GetHeroHomeInfo,
  GetHomeExperience,
  GetHomeProjects,
  GetToolList,
} from '@/app/lib/api/queries/queries'; // Importing GraphQL queries

/**
 * Function to fetch hero home information.
 * @returns {Promise<GetHeroHomeInfoQuery>} A promise resolving to the fetched hero home information.
 * @throws {Error} If there's an error while fetching the hero home information.
 */
export const fetchHeroHomeInfo = async () => {
  try {
    // Fetching hero home information using GraphQL query
    const { data }: { data: GetHeroHomeInfoQuery } = await getClient().query({
      query: GetHeroHomeInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 86400 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched hero home information
  } catch (error) {
    // Throwing an error if there's an issue while fetching the hero home information
    throw new Error(`Error fetching hero personal info ${error}`);
  }
};

/**
 * Function to fetch about me information.
 * @returns {Promise<GetAboutMeInfoQuery>} A promise resolving to the fetched about me information.
 * @throws {Error} If there's an error while fetching the about me information.
 */
export const fetchAboutMeInfo = async () => {
  try {
    // Fetching about me information using GraphQL query
    const { data }: { data: GetAboutMeInfoQuery } = await getClient().query({
      query: GetAboutMeInfo,
      context: {
        fetchOptions: {
          next: { revalidate: 172800 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched about me information
  } catch (error) {
    // Throwing an error if there's an issue while fetching the about me information
    throw new Error(`Error fetching about me personal info ${error}`);
  }
};

/**
 * Function to fetch the list of tools.
 * @returns {Promise<GetToolListQuery>} A promise resolving to the fetched list of tools.
 * @throws {Error} If there's an error while fetching the list of tools.
 */
export const fetchToolList = async () => {
  try {
    // Fetching the list of tools using GraphQL query
    const { data }: { data: GetToolListQuery } = await getClient().query({
      query: GetToolList,
      context: {
        fetchOptions: {
          next: { revalidate: 172800 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched list of tools
  } catch (error) {
    // Throwing an error if there's an issue while fetching the list of tools
    throw new Error(`Error fetching tool list ${error}`);
  }
};

/**
 * Function to fetch the list of home projects.
 * @returns {Promise<GetHomeProjectsQuery>} A promise resolving to the fetched list of home projects.
 * @throws {Error} If there's an error while fetching the list of home projects.
 */
export const fetchHomeProjects = async () => {
  try {
    // Fetching the list of home projects using GraphQL query
    const { data }: { data: GetHomeProjectsQuery } = await getClient().query({
      query: GetHomeProjects,
      context: {
        fetchOptions: {
          next: { revalidate: 172800 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched list of home projects
  } catch (error) {
    // Throwing an error if there's an issue while fetching the list of home projects
    throw new Error(`Error fetching project list ${error}`);
  }
};

/**
 * Function to fetch the list of home experience.
 * @returns {Promise<GetHomeExperienceQuery>} A promise resolving to the fetched list of home experience.
 * @throws {Error} If there's an error while fetching the list of home experience.
 */
export const fetchHomeExperience = async () => {
  try {
    // Fetching the list of home experience using GraphQL query
    const { data }: { data: GetHomeExperienceQuery } = await getClient().query({
      query: GetHomeExperience,
      context: {
        fetchOptions: {
          next: { revalidate: 172800 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched list of home experience
  } catch (error) {
    // Throwing an error if there's an issue while fetching the list of home experience
    throw new Error(`Error fetching experience list ${error}`);
  }
};
