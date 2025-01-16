"use client";

import SongThumb from "@/assets/song-thumb-default.jpg";
import ItemBox from "@/components/item-box";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ItemSlide = ({ title }: { title: string }) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 4,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">{title}</div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="[&_svg]:size-6"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="[&_svg]:size-6"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem className="basis-1/4" key={index}>
            <ItemBox url={SongThumb.src} showButton />
            <Link href={`/song/${index}`} className="my-1 hover:text-active">
              {index}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ItemSlide;
