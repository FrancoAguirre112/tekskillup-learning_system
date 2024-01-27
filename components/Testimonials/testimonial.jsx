"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SwiperNavButtons } from './SwiperButton';
import { testimonies } from '@/constants';

const testimonial = () => {
  return (
    <main className='px-8 md:px-24'>
      <div className='flex gap-[5px] items-center mt-[5rem]'>
        <div className='bg-[#525596] w-[72.995px] h-[2px]'></div>
        <h4 className='text-[#0A6A56] text-[18.249px] font-[400] leading-[3.65px] font-inter'>TESTIMONIAL</h4>
      </div>
      <div className='lg:flex lg:justify-between lg:gap-[230px]'>
        <div className='mb-16 lg:mb-0'>
          <h1 className='text-center md:text-start text-[40px] font-bold mt-[29px]'>What They Say?</h1>
          <h3 className='text-[#696984] md:text-[1.13rem] font-[400] leading-[24px] md:leading-[32px] lg:w-[469px] mt-[40px]'>Tekskillup has got more than 100k positive ratings from our users around the world.</h3>
          <h3 className='text-[#696984] md:text-[1.13rem] font-[400] leading-[24px] md:leading-[32px] lg:w-[469px] mt-[20px]'>Some of the students and teachers were greatly helped by the Skilline.</h3>
          <h3 className='text-[#696984] md:text-[1.13rem] font-[400] leading-[24px] md:leading-[32px] mt-[20px]'>Are you too? Please give your assessment</h3>
        </div>
          <Swiper
					slidespreview={'1'}
					centeredSlides={true}
					pagination={{
						clickable: true,
						el: '.swiper-pagination',
					}}
					modules={[Pagination]}
					className='w-full h-full'
				>
          {testimonies.map(({ id, src, comments, name, position}) => (
            <SwiperSlide key={id}>
              <div className="flex-center">
                <Image src={src} width='300' height='330' alt='' />
              </div>
              <h3 className='text-[#696984]  md:text-[1.12rem] leading-[36px] mt-[40px] md:mt-[52px]'>{comments}</h3>
              <h3 className='md:*:text-[1.13rem] font-[600] mt-[20px]'>{name}</h3>
              <h3 className='md:*:text-[1.13rem] font-[600] leading-[39.418px] mt-[3px]' style={{ color: `rgba(0, 0, 0, 0.50)` }}>{position}</h3>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </main>
  )
}

export default testimonial