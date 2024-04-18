import { fetchToolList } from '@/app/lib/api/data/fetch/home';
import { ToolSection } from './ToolSection';
import {
  GetToolListQuery,
  ToolCollection,
} from '@/app/lib/api/generated/graphql';

export async function Tools(): Promise<JSX.Element> {
  const { toolCollection }: GetToolListQuery = await fetchToolList();
  return (
    <section className="w-full bg-light-50 dark:bg-dark-950">
      <ToolSection toolCollection={toolCollection as ToolCollection} />
    </section>
  );
}
