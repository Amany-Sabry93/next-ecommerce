"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export default function Slider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <>
      <main>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <Image
                  width={400}
                  height={300}
                  src={img}
                   alt={title}
                  className="  w-full mx-auto rounded-2xl "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
    </>
  );
}
