'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import Image from 'next/image';
import {  Product } from '@/Interfaces/productInterface';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import AddToCart from '../AddToCart/AddToCart';
import { Star } from 'lucide-react';

export default function RelatedProducts({relatedProducts}:{relatedProducts:Product[]}) {
  return <>
  <Swiper   breakpoints={{0:{slidesPerView:1},480:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:5}}} spaceBetween={10}   modules={[Autoplay]} autoplay={{
            delay:2000,
            disableOnInteraction:false
           }} loop={true } >
     
     
      {relatedProducts.map((product:Product)=> <SwiperSlide key={product.id}>
        <div  className="p-2">
                      <Card className=" overflow-hidden pt-0 bg-fuchsia-200">
                        <Link href={"/products/" + product.id}>
                          {/* Image */}
                          <div className="-m-1 -mt-1 ">
                            <Image
                              width={200}
                              height={150}
                              src={product.imageCover}
                              alt={product.title}
                              className="block w-full relative z-20 object-cover "
                            />
                          </div>
        
                          {/* product details */}
                          <CardHeader className="mt-3">
                            <CardDescription>{product.brand.name}</CardDescription>
                            <CardTitle className="line-clamp-1">
                              {product.title}
                            </CardTitle>
                            <CardDescription>{product.category.name}</CardDescription>
                          </CardHeader>
                          {/* product rate */}
                          <CardContent>
                            <div className="flex gap-2">
                              <div className="flex ">
                                {[0, 1, 2, 3, 4].map((star) => {
                                  const filledStar =
                                    star < Math.round(product.ratingsAverage);
                                  return (
                                    <>
                                      <Star
                                        className={
                                          filledStar
                                            ? "text-fuchsia-700 fill-fuchsia-700"
                                            : "text-gray-500 fill-gray-500"
                                        }
                                      />
                                    </>
                                  );
                                })}
                              </div>
        
                              <p>{product.ratingsAverage}</p>
                            </div>
                            <p className="mt-2">
                              Price: <strong>{product.price} </strong>EGP{" "}
                            </p>
                          </CardContent>
                        </Link>
                        {/* Add To Cart Button */}
                       <AddToCart  productId={product.id}/>
                      </Card>
                    </div>
      </SwiperSlide>)}

     
      </Swiper>
  
  
  
  
  
  </>
}
