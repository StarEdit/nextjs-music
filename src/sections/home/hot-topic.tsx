import SongThumb from "@/assets/song-thumb-default.jpg";
import ItemBox from "@/components/item-box";

const HotTopic = () => {
  return (
    <div>
      <div className="text-xl font-bold">HotTopic</div>
      <div className="flex items-center gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ItemBox
            key={index}
            url={SongThumb.src}
            showButton={false}
            showTitle
            title={index.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default HotTopic;
