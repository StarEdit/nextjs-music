import SongThumb from "@/assets/song-thumb-default.jpg";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

const Song = ({ ordinalNumber }: { ordinalNumber: number }) => {
  return (
    <div className="w-full flex items-center gap-4 mb-2">
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary text-xs">
        {ordinalNumber}
      </div>
      <div className="flex-1">
        <div className="group flex items-center gap-2 p-2 bg-secondary rounded-md">
          <Image width={54} height={54} src={SongThumb} alt="thumb" />
          <div className="flex-1">
            <div>title</div>
            <div>artist list</div>
          </div>

          <Popover>
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
    </div>
  );
};

export default Song;
