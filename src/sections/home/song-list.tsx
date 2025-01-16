import ItemSong from "@/components/item-song";

const SongList = () => {
  return (
    <div>
      <div className="text-xl font-bold">SONG</div>
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <ItemSong key={index} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
