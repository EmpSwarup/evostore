'use client'

import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { images } from '../../app/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className='mt-6 flex w-full items-center justify-center'>
    <Swiper
      navigation


      modules={[Navigation, Pagination, Autoplay]}
      // Autoplay settings
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      onSwiper={swiper => console.log(swiper)}
      className='h-full w-full rounded-lg'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className='flex w-full items-center justify-center'>
            <Image
              src={image.src}
              alt={image.alt}
              className='block w-full object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}

export default Carousel;
