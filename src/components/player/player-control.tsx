"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { PlayerConstant } from "@/constant";
import { cn } from "@/lib/utils";
import { PopoverTrigger } from "@radix-ui/react-popover";
import {
  EllipsisVertical,
  Play,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

const PlayerControl = () => {
  const [repeatType, setRepeatType] = useState<
    ObjectValues<typeof PlayerConstant.RepeatType>
  >(PlayerConstant.RepeatType.noRepeat);
  const [isShuffle, setIsShuffle] = useState(false);

  const buttonRepeatRender = () => {
    switch (repeatType) {
      case PlayerConstant.RepeatType.noRepeat: {
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setRepeatType(PlayerConstant.RepeatType.repeatList)}
          >
            <Repeat />
          </Button>
        );
      }
      case PlayerConstant.RepeatType.repeatSong: {
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setRepeatType(PlayerConstant.RepeatType.noRepeat)}
            className="text-active hover:text-active"
          >
            <Repeat1 />
          </Button>
        );
      }
      case PlayerConstant.RepeatType.repeatList: {
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setRepeatType(PlayerConstant.RepeatType.repeatSong)}
            className="text-active hover:text-active"
          >
            <Repeat />
          </Button>
        );
      }
    }
  };

  return (
    <div className="sticky bottom-6">
      <div className="sr-only">
        <ReactPlayer url="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Volume2 />
            </PopoverTrigger>
            <PopoverContent className="flex items-center gap-2 w-60">
              <Progress value={100} /> <span className="text-xs">100</span>
            </PopoverContent>
          </Popover>

          <Button className="flex-1" variant="secondary">
            Playlist
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuItem>Add to queue</DropdownMenuItem>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuItem>Download</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs">00:00</div>
          <Progress value={33} />
          <div className="text-xs">03:00</div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsShuffle((prev) => !prev)}
            className={cn({ "text-active hover:text-active": isShuffle })}
          >
            <Shuffle />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipBack />
          </Button>
          <Button variant="ghost">
            <Play className="!h-6 !w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward />
          </Button>
          {buttonRepeatRender()}
        </div>
      </div>
    </div>
  );
};

export default PlayerControl;
