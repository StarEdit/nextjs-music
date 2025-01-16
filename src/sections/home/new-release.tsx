"use client";

import SongThumb from "@/assets/song-thumb-default.jpg";
import ItemBox from "@/components/item-box";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NewRelease = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="text-2xl font-bold">New Release</div>
      <div className="flex gap-4 px-10 py-5 border-b">
        <div>
          <Image
            className="rounded-md"
            src={SongThumb}
            alt="thumb"
            width={160}
            height={160}
          />
        </div>
        <div>
          <div>Title</div>
          <div className="mt-2 flex items-center gap-2">
            {["CN", "VT", "QN", "HH"].map((item) => (
              <Avatar key={item} className="h-6 w-6">
                <AvatarImage />
                <AvatarFallback className="text-xs">{item}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <CalendarDays size={16} />
            <span className="text-xs opacity-80">Release Date: 10/10/2024</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className={cn(
              "before:relative before:-top-6 before:left-1/2 before:-translate-x-1/2 before:block before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-border before:opacity-0",
              {
                "before:opacity-100": index === active,
              }
            )}
            key={index}
            onMouseEnter={() => setActive(index)}
          >
            <ItemBox
              url={SongThumb.src}
              groupClassName="h-20 w-20"
              showButton
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
