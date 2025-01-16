"use client";

import SongThumb from "@/assets/song-thumb-default.jpg";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { EllipsisVertical, Headphones } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const ItemSong = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="group flex items-center gap-2 p-2 bg-primary-foreground rounded-md">
      <Image width={54} height={54} src={SongThumb} alt="thumb" />
      <div className="flex-1">
        <div>title</div>
        <div>artist list</div>
      </div>
      <div className="relative">
        <Button
          variant="ghost"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 right-0 group-hover:hidden text-xs",
            { hidden: isHover }
          )}
        >
          <Headphones /> 11.5k
        </Button>

        <Popover onOpenChange={setIsHover}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100"
            >
              <EllipsisVertical />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 w-32">
            <Button variant="ghost">Copy link</Button>
            <Button variant="ghost">Go to song</Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ItemSong;
