'use client';
// External modules
import Image from 'next/image'; // Image component from Next.js
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components from Swiper library

// GraphQL type
import { Asset } from '@/app/lib/api/generated/graphql'; // GraphQL type for asset

// Custom models
import { BulletStyleType, ProjectSliderProps } from './ProjectSlider.model'; // Props for the project slider component

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

/**
 * Represents a slider component for project images.
 * Uses Swiper library for the slider functionality.
 * @param {ProjectSliderProps} projectImages - An array of project images.
 * @returns {JSX.Element} - JSX element representing the project slider component.
 */
export function ProjectSlider({ projectImages }: ProjectSliderProps) {
  // Define custom styles for Swiper pagination bullets
  const bulletStyle: BulletStyleType = {
    '--swiper-pagination-color': '#069bf1',
    '--swiper-pagination-bullet-inactive-color': '#ffffff',
  };

  //Render Project Slider
  return (
    <div className="w-full rounded-xl shadow-lg shadow-secondary-500/10">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper overflow-hidden w-full lg:rounded-l-xl"
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        grabCursor
        style={bulletStyle}
      >
        {projectImages.map((image: Asset) => (
          <SwiperSlide key={`HeroSlider-${image?.title}`}>
            <figure className="relative w-full aspect-video lg:aspect-[4/3]">
              <Image
                fill
                sizes="100%"
                src={`${image?.url}`}
                alt={`${image?.title}`}
                placeholder="blur"
                loading="lazy"
                className="object-cover object-center"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
