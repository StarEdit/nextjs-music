import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SongType } from "@/schema-validation/song.schema";
import { Share2 } from "lucide-react";

const DetailSongAction = ({ songDetail }: { songDetail: SongType }) => {
  return (
    <div className="bg-secondary rounded-md mt-4 p-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={songDetail.uploadedBy.src} />
          <AvatarFallback className="text-xs bg-primary text-secondary">
            {songDetail.uploadedBy.name}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-xs">Uploaded By:</div>
          <div className="text-active">{songDetail.uploadedBy.name}</div>
        </div>
      </div>

      <Button size="icon">
        <Share2 />
      </Button>
    </div>
  );
};

export default DetailSongAction;
