import AllResult from "@/sections/search/all-result";
import History from "@/sections/search/history";
import TopKeyword from "@/sections/search/top-keyword";

const Search = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { q = "" } = await searchParams;

  return (
    <div>
      {q ? (
        <AllResult />
      ) : (
        <>
          <TopKeyword />
          <History />
        </>
      )}
    </div>
  );
};

export default Search;
