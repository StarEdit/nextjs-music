import SongThumb from "@/assets/song-thumb-default.jpg";
import ItemBox from "@/components/item-box";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HotVideo = () => {
  return (
    <div>
      <div className="text-xl font-bold">HOT VIDEO</div>
      <div className="flex items-center flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={cn("basis-1/4 p-2", {
              "basis-1/2": index <= 1,
              "pl-0": index === 0 || index === 2,
              "pr-0": index === 1 || index === 5,
            })}
          >
            <ItemBox
              url={SongThumb.src}
              groupClassName={cn("h-40", { "h-60": index <= 1 })}
              showButton
            />
            <div className="flex flex-col mt-2">
              <Link className="hover:text-active" href={`/video/${index}`}>
                {index}
              </Link>
              <Link
                className="text-xs opacity-80 hover:text-active"
                href={`/artist/${index}`}
              >
                {index}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotVideo;
