import { getClient } from '@/lib/client'; // Importing the getClient function to retrieve the GraphQL client

import {
  GetProjectDetailsQuery,
  GetProjectsListQuery,
} from '@/app/lib/api/generated/graphql'; // Importing GraphQL query types

import {
  GetProjectDetails,
  GetProjectsList,
} from '@/app/lib/api/queries/queries'; // Importing GraphQL queries

/**
 * Function to fetch the list of projects.
 * @returns {Promise<GetProjectsListQuery>} A promise resolving to the fetched list of projects.
 * @throws {Error} If there's an error while fetching the list of projects.
 */
export const fetchProjectList = async () => {
  try {
    // Fetching the list of projects using GraphQL query
    const { data }: { data: GetProjectsListQuery } = await getClient().query({
      query: GetProjectsList,
      context: {
        fetchOptions: {
          next: { revalidate: 3600 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched list of projects
  } catch (error) {
    // Throwing an error if there's an issue while fetching the list of projects
    throw new Error(`Error fetching project list ${error}`);
  }
};

/**
 * Function to fetch project details by slug.
 * @param {string} slug - The slug of the project.
 * @returns {Promise<GetProjectDetailsQuery>} A promise resolving to the fetched project details.
 * @throws {Error} If there's an error while fetching the project details.
 */
export const fetchProjectDetails = async ({ slug }: { slug: string }) => {
  try {
    // Fetching project details using GraphQL query
    const { data }: { data: GetProjectDetailsQuery } = await getClient().query({
      query: GetProjectDetails({ slug: slug }), // Pass the slug as a parameter to the query function
      context: {
        fetchOptions: {
          next: { revalidate: 3600 }, // Options for cache revalidation
        },
      },
    });
    return data; // Returning the fetched project details
  } catch (error) {
    // Throwing an error if there's an issue while fetching the project details
    throw new Error(`Error fetching project list ${error}`);
  }
};
