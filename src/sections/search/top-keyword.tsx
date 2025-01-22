const TopKeyword = () => {
  return (
    <section>
      <div className="font-bold text-xl">Top Keyword</div>
      <div className="flex flex-wrap items-center gap-8 mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative bg-border text-xs border-2 rounded-l py-1 px-4 border-r-0 after:absolute after:-right-[10px] after:-bottom-[2px] after:w-0 after:h-0 after:border-t-[14px] after:border-t-transparent after:border-b-[14px] after:border-b-transparent after:border-l-[10px] after:border-l-border"
          >
            <span className="text-active font-bold">#{index}</span> Hello
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopKeyword;
