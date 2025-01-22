import { RouteConstant } from "@/constant";
import DetailResult from "@/sections/search/detail-result";

const Song = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { q = "", page = "1" } = await searchParams;

  return (
    <DetailResult
      title="Playlist"
      pathName={RouteConstant.Search.playlist}
      queryParams={{ page: Number(page), q: q as string }}
    />
  );
};

export default Song;
