import Song from "@/sections/top-100/song";

const Songs = () => {
  return (
    <div className="rounded-b-md px-4 pb-2 pt-4">
      {Array.from({ length: 100 }).map((_, index) => (
        <Song key={index} ordinalNumber={index + 1} />
      ))}
    </div>
  );
};

export default Songs;
