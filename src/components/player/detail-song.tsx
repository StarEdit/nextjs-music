import songThumbDefault from "@/assets/song-thumb-default.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MicVocal } from "lucide-react";
import Image from "next/image";

const DetailSong = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <div>Card Description</div>
          <Button size="icon" variant="ghost">
            <MicVocal />
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={songThumbDefault}
            alt="thumbnail"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default DetailSong;
