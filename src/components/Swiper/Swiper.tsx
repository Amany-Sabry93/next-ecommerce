'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import Image from 'next/image';
import { Category } from '@/Interfaces/CartInterfaces';
import Link from 'next/link';


export default function SwiperCategory({allCategories}:{allCategories:Category[]}) {
  return <>
  <main>
    <Swiper  breakpoints={{0:{slidesPerView:2},480:{slidesPerView:3},768:{slidesPerView:5},1024:{slidesPerView:7}}}   modules={[Autoplay]} autoplay={{
          delay:2000,
          disableOnInteraction:false
         }} loop={true } >
   {allCategories.map((category)=><SwiperSlide key={category._id}>
    <Link href={'/categories/'+category._id}>
    <Image src={category.image} alt={category.name} width={300} height={200} className='w-full object-cover h-[200]'/>
    <h3 className='text-center font-semibold text-gray-600'>{category.name}</h3>
    </Link>

   </SwiperSlide>)}
      
    </Swiper>





  </main>

  
  
  
  </>
}
