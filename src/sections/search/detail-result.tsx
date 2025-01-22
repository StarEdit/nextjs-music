import SongThumb from "@/assets/song-thumb-default.jpg";
import AutoPagination from "@/components/auto-pagination";
import ItemBox from "@/components/item-box";
import Link from "next/link";

const DetailResult = ({
  queryParams,
  pathName,
  title,
}: {
  queryParams: { page: number; q: string };
  pathName: string;
  title: string;
}) => {
  return (
    <div className="mt-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 20 }).map((_, index) => (
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
      <AutoPagination
        className="mt-4"
        pageSize={20}
        page={queryParams.page}
        pathname={pathName}
        searchParams={queryParams}
      />
    </div>
  );
};

export default DetailResult;
