import { Asset } from '@/app/lib/api/generated/graphql';
export interface ProjectSliderProps {
  projectImages: Asset[];
}

export interface BulletStyleType extends React.CSSProperties {
  '--swiper-pagination-color'?: string;
  '--swiper-pagination-bullet-inactive-color'?: string;
}
