import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SongType } from "@/schema-validation/song.schema";
import { EllipsisVertical } from "lucide-react";

const DetailPlaylistSong = ({ songList }: { songList: SongType[] }) => {
  return (
    <div>
      <div className="font-bold text-xl mb-4 mt-4">Song list</div>
      <div>
        <div className="font-bold text-lg flex items-center bg-secondary p-2 rounded-md mb-2">
          <div className="basis-[40%]">Title</div>
          <div className="basis-1/2">Artist</div>
          <div className="basis-[10%]">Duration</div>
        </div>

        <div className="text-xs">
          {songList.map((song) => (
            <div
              key={song.id}
              className="bg-secondary rounded-md px-2 py-1 flex items-center mb-1"
            >
              <div className="basis-[40%] flex items-center justify-between group cursor-pointer">
                <div>{song.title}</div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
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
              <div className="basis-1/2">
                {song.artist.map((item, index) =>
                  index > 0 ? `, ${item.name}` : item.name
                )}
              </div>
              <div className="basis-[10%]">Duration</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPlaylistSong;
