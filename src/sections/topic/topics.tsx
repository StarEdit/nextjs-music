import SongThumb from "@/assets/song-thumb-default.jpg";
import ItemBox from "@/components/item-box";

const Topics = () => {
  return (
    <div className="mt-4">
      <div className="text-xl font-bold mb-4">Topics</div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index} className="basis-1/4">
            <ItemBox
              url={SongThumb.src}
              showButton={false}
              showTitle
              title={index.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
