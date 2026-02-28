'use client'
import image1 from '../../../public/slider-image-1.jpeg'
import image2 from '../../../public/slider-image-2.jpeg'
import image3 from '../../../public/slider-image-3.jpeg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'



export default function HomeSlider() {
  return  <>
  <main>
  <div className='grid grid-cols-12'>
    <div className='col-span-12   md:col-span-8'>
        
         <Swiper slidesPerView={1}  modules={[Autoplay]} autoplay={{
          delay:2000,
          disableOnInteraction:false
         }} loop={true } >
      <SwiperSlide><Image src={image1} alt='image1' width={1000} height={900}  className='md:h-125 w-full' /></SwiperSlide>
      <SwiperSlide><Image src={image2} alt='image2'width={1000} height={900}  className='md:h-125 w-full' /></SwiperSlide>
      <SwiperSlide><Image src={image3} alt='image3'width={1000} height={900}   className=' md:h-125 w-full' /></SwiperSlide>
      
      
    </Swiper>
    
    </div>
    <div className='col-span-12  md:col-span-4'>
         <Image src={image2} alt='image2' width={700} height={600}  className='md:h-62.5 w-full'  />
          <Image src={image3} alt='image3'width={700} height={600}   className='md:h-62.5 w-full' />

    </div>


  </div>
  </main>
  </>
  
}
