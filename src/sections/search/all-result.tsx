import SongThumb from "@/assets/song-thumb-default.jpg";
import ItemBox from "@/components/item-box";
import ItemSong from "@/components/item-song";
import Link from "next/link";

const AllResult = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div>
        <div className="font-bold text-xl mb-2">Song</div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <ItemSong key={index} />
          ))}
        </div>
      </div>

      <div>
        <div className="font-bold text-xl mb-2">Playlist</div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}>
              <ItemBox url={SongThumb.src} showButton />
              <div className="flex flex-col mt-2">
                <Link className="hover:text-active" href={`/playlist/${index}`}>
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

      <div>
        <div className="font-bold text-xl mb-2">Video</div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}>
              <ItemBox url={SongThumb.src} showButton />
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
    </div>
  );
};

export default AllResult;
