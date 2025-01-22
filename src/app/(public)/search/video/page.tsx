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
      title="Video"
      pathName={RouteConstant.Search.video}
      queryParams={{ page: Number(page), q: q as string }}
    />
  );
};

export default Song;
