'use client';
// Import necessary dependencies and types
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SDPhoto from '@/public/images/sebastian2.jpg';
import { BulletStyleType } from './ProjectSlider.model';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export function ProjectSlider() {
  const arrayTest: number[] = Array.from({ length: 5 }, (_, index) => index);
  // Define custom styles for Swiper pagination bullets
  const bulletStyle: BulletStyleType = {
    '--swiper-pagination-color': '#069bf1',
    '--swiper-pagination-bullet-inactive-color': '#ffffff',
  };
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
        {arrayTest.map((index) => (
          <SwiperSlide key={`HeroSlider-${index}`}>
            <figure className="relative w-full aspect-video lg:aspect-[4/3]">
              <Image
                fill
                sizes="100%"
                src={SDPhoto}
                alt={'SebasDeveloper'}
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
