import SongThumb from "@/assets/song-thumb-default.jpg";
import AutoPagination from "@/components/auto-pagination";
import ItemBox from "@/components/item-box";
import Link from "next/link";

const NewHot = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { page = "" } = await searchParams;

  return (
    <div className="mt-4">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index}>
            <ItemBox url={SongThumb.src} showButton />
            <div className="flex flex-col mt-2">
              <Link className="hover:text-active" href={`/song/${index}`}>
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
      <AutoPagination
        className="mt-4"
        pageSize={20}
        page={Number(page)}
        pathname="/song/new-hot"
      />
    </div>
  );
};

export default NewHot;
