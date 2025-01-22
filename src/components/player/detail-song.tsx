"use client";

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
import usePlayer from "@/hooks/use-player";
import { cn } from "@/lib/utils";
import { MicVocal } from "lucide-react";
import Image from "next/image";

const DetailSong = () => {
  const { isKaraoke, handleKaraoke } = usePlayer();

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <div>Card Description</div>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => handleKaraoke(!isKaraoke)}
            className={cn({ "text-active": isKaraoke })}
          >
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
