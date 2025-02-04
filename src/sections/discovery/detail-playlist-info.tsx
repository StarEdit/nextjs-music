import SongThumb from "@/assets/song-thumb-default.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArtistType } from "@/schema-validation/artist.schema";
import { PlaylistType } from "@/schema-validation/playlist.schema";
import parse from "html-react-parser";
import { CirclePlay } from "lucide-react";
import Image from "next/image";

const DetailPlaylistInfo = ({ detail }: { detail: PlaylistType }) => {
  return (
    <div className="flex gap-4">
      <div className="relative flex flex-col items-center">
        <div className="w-28 h-1 rounded-t-md bg-secondary" />
        <div className="w-36 h-1 rounded-t-md bg-secondary" />
        <Image alt="thumb" src={SongThumb} className="w-44 h-44 rounded-md" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 bottom-2 [&_svg]:size-8 w-10 h-10"
        >
          <CirclePlay />
        </Button>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-xs">
            Playlist: <span className="font-bold text-lg">{detail.title}</span>
          </div>
          <div className="opacity-80 text-xs">{detail.release}</div>
        </div>
        <div>
          {detail.artist.map((item: ArtistType) => (
            <div key={item.id}>
              <Avatar className="h-6 w-6">
                <AvatarImage src={item.src} />
                <AvatarFallback className="text-xs">{item.name}</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
        <div>
          <span className="text-xs">Uploaded by: </span>
          <span className="text-active text-lg">{detail.uploadedBy.name}</span>
        </div>
        <div className="text-xs">{parse(detail.description || "")}</div>
      </div>
    </div>
  );
};

export default DetailPlaylistInfo;
