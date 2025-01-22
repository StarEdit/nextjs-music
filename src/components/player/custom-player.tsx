import DetailSong from "@/components/player/detail-song";
import PlayerControl from "@/components/player/player-control";

const CustomPlayer = () => {
  return (
    <div className="relative w-80 flex flex-col justify-between p-6 border-l">
      <DetailSong />
      <PlayerControl />
    </div>
  );
};

export default CustomPlayer;
