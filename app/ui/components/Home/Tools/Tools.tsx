// API and GraphQL imports
import { fetchToolList } from '@/app/lib/api/data/fetch/home'; // Function to fetch tool list
import {
  GetToolListQuery,
  ToolCollection,
} from '@/app/lib/api/generated/graphql'; // GraphQL types and queries for tool list

// Custom component
import { ToolSection } from './ToolSection'; // Component for the section of tools

/**
 * Represents a section containing tools.
 * Fetches tool data and renders the ToolSection component.
 * @returns {Promise<JSX.Element>} - Promise resolving to a JSX element representing the section containing tools.
 */
export async function Tools(): Promise<JSX.Element> {
  // Fetch tool data
  const { toolCollection }: GetToolListQuery = await fetchToolList();

  // Render the section containing tools
  return (
    <section className="w-full bg-light-50 dark:bg-dark-950">
      <ToolSection toolCollection={toolCollection as ToolCollection} />
    </section>
  );
}
