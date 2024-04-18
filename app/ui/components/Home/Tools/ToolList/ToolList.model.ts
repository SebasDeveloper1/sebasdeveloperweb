import { RefObject } from 'react';
import { ToolCollection } from '@/app/lib/api/generated/graphql';

export interface ToolListProps {
  sectionRef: RefObject<HTMLUListElement>;
  toolCollection: ToolCollection;
}
export interface ButtonText {
  showMore: {
    text: string;
    icon: JSX.Element;
  };
  showLess: {
    text: string;
    icon: JSX.Element;
  };
}
