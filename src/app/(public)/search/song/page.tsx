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
      title="Song"
      pathName={RouteConstant.Search.song}
      queryParams={{ page: Number(page), q: q as string }}
    />
  );
};

export default Song;
